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

  res.send(savedShop._id);
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

exports.updateShop = async (req, res) => {
  const { shopId, name, type, description, products } = req.body;
  // const processedProducts = products.map(product => ({
  //   ...product,
  //   shop: shopId
  // }));

  await Shop.findOneAndUpdate({ _id: shopId }, { name, type, description });

  // get all existing products
  const existingProducts = await Product.find({ shop: shopId });
  // delete those products that were edited out
  existingProducts.forEach(async existingProduct => {
    const productExists = products.some(
      product => product.itemId === String(existingProduct._id)
    );

    if (!productExists) {
      await Product.deleteOne({ _id: existingProduct._id });
    }
  });

  products.forEach(async product => {
    if (product.itemId) {
      // update existing products
      await Product.findOneAndUpdate(
        { _id: product.itemId },
        {
          name: product.name,
          price: product.price
        }
      );
    } else {
      // add new products
      await Product.create({
        name: product.name,
        price: product.price,
        shop: shopId
      });
    }
  });

  res.send(shopId);
};
// 5cfab2e6ba588d2c54763b01
// 5cfab2e6ba588d2c54763b01
