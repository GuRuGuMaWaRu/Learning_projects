const mongoose = require("mongoose");
const CartItem = require("../models/CartItem");
const Product = require("../models/Product");
const Shop = require("../models/Shop");

exports.getCartTotals = () => {
  return CartItem.aggregate([
    {
      $lookup: {
        from: "products",
        as: "productData",
        localField: "item",
        foreignField: "_id"
      }
    },
    {
      $unwind: "$productData"
    },
    {
      $project: {
        qty: 1,
        price: "$productData.price"
      }
    },
    {
      $group: {
        _id: 0,
        totalQty: { $sum: { $add: "$qty" } },
        totalPrice: { $sum: { $multiply: ["$qty", "$price"] } }
      }
    }
  ]);
};

exports.getCartItems = () => {
  return CartItem.aggregate([
    {
      $lookup: {
        from: "products",
        as: "productData",
        localField: "item",
        foreignField: "_id"
      }
    },
    {
      $unwind: "$productData"
    },
    {
      $project: {
        qty: 1,
        name: "$productData.name",
        price: "$productData.price"
      }
    }
  ]);
};

exports.getProductData = shopId => {
  return Shop.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(shopId)
      }
    },
    {
      $lookup: {
        from: "products",
        as: "productData",
        localField: "_id",
        foreignField: "shop"
      }
    },
    {
      $project: {
        name: 1,
        type: 1,
        description: 1,
        productData: {
          $reduce: {
            input: "$productData",
            initialValue: [],
            in: {
              $concatArrays: [
                "$$value",
                [
                  {
                    name: "$$this.name",
                    price: "$$this.price"
                  }
                ]
              ]
            }
          }
        }
      }
    }
  ]);
};
