const Product = require("../models/Product.js");
const CartItem = require("../models/CartItem");

exports.addToCart = async (req, res) => {
  const { itemId } = req.body;

  await CartItem.findOneAndUpdate(
    { itemId: itemId },
    { itemId: itemId, $inc: { qty: 1 } },
    { upsert: true }
  );

  res.send();
};