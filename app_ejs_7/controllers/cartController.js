const CartItem = require("../models/CartItem");

exports.loadCartPage = (req, res) => {
  res.render("cart");
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
