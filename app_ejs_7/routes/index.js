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

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
