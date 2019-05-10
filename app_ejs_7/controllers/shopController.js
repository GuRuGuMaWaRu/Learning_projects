const Shop = require("../models/Shop");
const Product = require("../models/Product");
const {
  getCartTotals,
  getProductData,
  addProducts,
  getCurrency
} = require("../models/helpers");

exports.loadCreateShopPage = async (req, res) => {
  const totals = await getCartTotals();
  const currency = await getCurrency();

  res.render("shopCreate", {
    totals: totals[0],
    currency: currency[0].currency
  });
};

exports.createShop = async (req, res) => {
  const data = req.body;
  const shopData = {
    name: data.name,
    type: data.type,
    description: data.description
  };

  // save new shop
  const savedShop = await new Shop(shopData).save();
  // save new shop products
  await addProducts(data.products, savedShop._id);

  res.redirect("/");
};

exports.selectShop = async (req, res) => {
  const id = req.params.id;

  await Shop.updateMany({ selected: true }, { selected: false });
  await Shop.findByIdAndUpdate(id, { selected: true });

  res.redirect("/");
};

exports.loadEditShopsPage = async (req, res) => {
  const totals = await getCartTotals();
  const currency = await getCurrency();
  const shops = await Shop.aggregate([
    {
      $project: {
        name: 1,
        description: 1
      }
    }
  ]);

  res.render("editShops", {
    shops: shops,
    currency: currency[0].currency,
    totals: totals[0]
  });
};

exports.editShop = async (req, res) => {
  const shopId = req.params.shopId;

  const totals = await getCartTotals();
  const currency = await getCurrency();
  const shop = await getProductData(shopId);

  res.render("editShop", {
    shop: shop[0],
    currency: currency[0].currency,
    totals: totals[0]
  });
};

exports.updateShop = async (req, res) => {
  const { shopId, name, type, description, products } = req.body;

  await Shop.findOneAndUpdate({ _id: shopId }, { name, type, description });
  // clear old shop products before adding updated ones
  await Product.deleteMany({ shop: shopId });
  // add old and updated products
  await addProducts(products, shopId);

  res.redirect("/");
};
