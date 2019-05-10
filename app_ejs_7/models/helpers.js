const mongoose = require("mongoose");
const CartItem = require("../models/CartItem");
const Product = require("../models/Product");
const Currency = require("../models/Currency");
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

exports.addProducts = (newProducts, shopId) => {
  // validation: has products in proper format
  if (newProducts.includes(";") || newProducts.includes(",")) {
    // save new products for this shop
    const products = newProducts
      .split(";")
      .reduce((processedProducts, product) => {
        // validation: has product name/price separation
        if (product.includes(",")) {
          const [name, price] = product
            .split(",")
            .map(dataItem => dataItem.trim());

          // validation: price
          if (isNaN(price)) {
            return processedProducts;
          }

          return [...processedProducts, { name, price, shop: shopId }];
        } else {
          return processedProducts;
        }
      }, []);

    Product.insertMany(products);
  }
};

exports.getCurrency = () => {
  return Currency.find();
};
