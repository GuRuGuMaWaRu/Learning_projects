const Shop = require("../models/Shop");
const Product = require("../models/Product");
const {
  getCartTotals,
  getProductData,
  addProducts
} = require("../models/helpers");

exports.loadCreateShopPage = async (req, res) => {
  const totals = await getCartTotals();

  res.render("shopCreate", { totals: totals[0] });
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

  const selectedShopProducts = selectedShop
    ? await Product.find({ shop: selectedShop._id })
    : [];

  res.render("shopping", {
    shops: shops,
    selectedShop: selectedShop,
    products: selectedShopProducts,
    totals: totals[0]
  });
};

exports.loadEditShopsPage = async (req, res) => {
  const totals = await getCartTotals();
  const shops = await Shop.aggregate([
    {
      $project: {
        name: 1,
        description: 1
      }
    }
  ]);

  res.render("editShops", { shops: shops, totals: totals[0] });
};

exports.editShop = async (req, res) => {
  const shopId = req.params.shopId;

  const totals = await getCartTotals();
  const shop = await getProductData(shopId);

  res.render("editShop", { shop: shop[0], totals: totals[0] });
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
