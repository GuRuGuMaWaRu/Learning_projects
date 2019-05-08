const CartItem = require("../models/CartItem");
const { getCartTotals, getCartItems } = require("../models/helpers");

exports.loadCartPage = async (req, res) => {
  const totals = await getCartTotals();
  const cartItems = await getCartItems();

  res.render("cart", { totals: totals[0], cartItems: cartItems });
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

exports.clearCart = async (req, res) => {
  await CartItem.deleteMany();

  res.redirect("/");
};
