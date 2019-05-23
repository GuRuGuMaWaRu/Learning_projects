const Shop = require("../models/Shop");

exports.saveShop = async (req, res) => {
  const shopData = req.body;
  await Shop.create(shopData);
  res.send();
};

exports.getShopNames = async (req, res) => {
  const shopNames = await Shop.aggregate([
    {
      $project: {
        name: 1
      }
    }
  ]);

  res.send(shopNames);
};

exports.selectShop = async (req, res) => {
  const shopId = req.params.id;
  const shop = await Shop.findOne({ _id: shopId });

  res.send(shop);
};
