const CartItem = require("../models/CartItem");

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
