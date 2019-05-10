const Shop = require("../models/Shop");
const Product = require("../models/Product");
const Currency = require("../models/Currency");
const { getCartTotals, getCurrency } = require("../models/helpers");

exports.loadShoppingPage = async (req, res) => {
  // set at least one shop as selected so that
  // it will be displayed on Shopping page
  await Shop.findOne({ selected: true }, async (err, found) => {
    if (!found) {
      await Shop.findOneAndUpdate({ selected: false }, { selected: true });
    }
  });

  const shops = await Shop.find();
  const selectedShop = shops.filter(shop => shop.selected)[0];
  const totals = await getCartTotals();
  const currency = await getCurrency();

  const selectedShopProducts = selectedShop
    ? await Product.find({ shop: selectedShop._id })
    : [];

  res.render("shopping", {
    shops: shops,
    selectedShop: selectedShop,
    products: selectedShopProducts,
    totals: totals[0],
    currency: currency[0].currency,
    currentPage: req.originalUrl
  });
};

exports.changeCurrency = async (req, res) => {
  const { selectedCurrency, currentPage } = req.body;

  await Currency.updateOne(
    {},
    { currency: selectedCurrency },
    { upsert: true }
  );

  res.redirect(`${currentPage}`);
};
