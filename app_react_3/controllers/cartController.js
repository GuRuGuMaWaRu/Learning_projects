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

  const preparedCartItems = cartItems.map(item => ({
    itemId: item.itemId,
    itemName: item.itemName,
    itemPrice: item.itemPrice,
    qty: item.qty
  }));

  res.send(preparedCartItems);
};

exports.changeCartItemQty = async (req, res) => {
  const { cartItemId, changeType } = req.body;

  await CartItem.updateOne(
    {
      itemId: cartItemId
    },
    { $inc: { qty: changeType === "increase" ? 1 : -1 } }
  );

  res.send();
};
