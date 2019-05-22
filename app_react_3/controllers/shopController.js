const Shop = require("../models/Shop");

exports.saveShop = async (req, res) => {
  const shopData = req.body;
  await Shop.create(shopData);
  res.send();
};
