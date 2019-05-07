const CartItem = require("../models/CartItem");
const { getCartTotals } = require("../models/helpers");

exports.loadCartPage = async (req, res) => {
  const totals = await getCartTotals();

  res.render("cart", { totals: totals[0] });
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
