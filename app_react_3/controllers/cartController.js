const Product = require("../models/Product.js");
const CartItem = require("../models/CartItem");

exports.addToCart = async (req, res) => {
  const { itemId, itemPrice, itemName } = req.body;

  await CartItem.findOneAndUpdate(
    { itemId: itemId },
    {
      itemId: itemId,
      itemName: itemName,
      itemPrice: itemPrice,
      $inc: { qty: 1 }
    },
    { upsert: true }
  );

  res.send();
};

exports.getCartItems = async (req, res) => {
  const cartItems = await CartItem.find();

  console.log(cartItems);
  res.send(cartItems);
};
