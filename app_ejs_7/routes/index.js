const express = require("express");
const router = express.Router();
const Shop = require("../models/Shop");

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

  await Shop.create(shopData);

  res.redirect("/");
});

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
