const Shop = require("../models/Shop");
const Product = require("../models/Product");

exports.saveShop = async (req, res) => {
  const { name, type, description, products } = req.body;

  const savedShop = await Shop.create({ name, type, description });

  products.forEach(async product => {
    await Product.create({
      name: product.name.length > 0 ? product.name : "Undefined",
      price: product.price > 0 ? product.price : 0.01,
      shop: savedShop._id
    });
  });

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
  const products = await Product.find({ shop: shopId });

  res.send({ shop, products });
};

exports.deleteShop = async (req, res) => {
  const shopId = req.params.shopId;

  await Shop.findByIdAndDelete(shopId);
  await Product.deleteMany({ shop: shopId });

  res.send();
};
