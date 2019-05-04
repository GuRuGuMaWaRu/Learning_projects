const express = require("express");
const router = express.Router();
const Shop = require("../models/Shop");
const Product = require("../models/Product");

router.get("/shop/create", (req, res) => {
  res.render("shopCreate");
});

router.post("/shop/create", async (req, res) => {
  const data = req.body;
  const shopData = {
    name: data.name,
    type: data.type,
    description: data.description
  };

  // save new shop
  const savedShop = await new Shop(shopData).save();

  // save new products for this shop
  const products = data.products
    .split(";")
    .reduce((processedProducts, product) => {
      const [name, price] = product.split(",").map(dataItem => dataItem.trim());

      return [...processedProducts, { name, price, shop: savedShop._id }];
    }, []);

  await Product.insertMany(products);

  res.redirect("/");
});

router.get("/shop/select/:id", async (req, res) => {
  const id = req.params.id;

  await Shop.updateMany({ selected: true }, { selected: false });
  await Shop.findByIdAndUpdate(id, { selected: true });

  res.redirect("/");
});

router.get("/", async (req, res) => {
  // set at least one shop as selected so that
  // it will be displayed on Shopping page
  await Shop.findOne({ selected: true }, async (err, found) => {
    if (!found) {
      await Shop.findOneAndUpdate({ selected: false }, { selected: true });
    }
  });

  const shops = await Shop.find();
  const selectedShop = shops.filter(shop => shop.selected)[0];

  const selectedShopProducts = await Product.find({ shop: selectedShop._id });

  res.render("shopping", {
    shops: shops,
    products: selectedShopProducts
  });
});

module.exports = router;
