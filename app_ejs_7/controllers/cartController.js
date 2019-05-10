const CartItem = require("../models/CartItem");
const {
  getCartTotals,
  getCartItems,
  getCurrency
} = require("../models/helpers");

exports.loadCartPage = async (req, res) => {
  const totals = await getCartTotals();
  const currency = await getCurrency();
  const cartItems = await getCartItems();

  res.render("cart", {
    cartItems: cartItems,
    totals: totals[0],
    currency: currency[0].currency,
    currentPage: req.originalUrl
  });
};

exports.addToCart = async (req, res) => {
  const productId = req.params.productId;

  await CartItem.findOneAndUpdate(
    { item: productId },
    { $inc: { qty: 1 } },
    { upsert: true }
  );

  res.redirect("/");
};

exports.deleteAll = async (req, res) => {
  await CartItem.deleteMany();

  res.redirect("/");
};

exports.deleteOne = async (req, res) => {
  const itemId = req.params.itemId;

  await CartItem.deleteOne({ _id: itemId });

  res.redirect("/cart");
};

exports.increase = async (req, res) => {
  const itemId = req.params.itemId;

  await CartItem.updateOne({ _id: itemId }, { $inc: { qty: 1 } });

  res.redirect("/cart");
};

exports.decrease = async (req, res) => {
  const itemId = req.params.itemId;

  await CartItem.updateOne({ _id: itemId }, { $inc: { qty: -1 } });

  res.redirect("/cart");
};
