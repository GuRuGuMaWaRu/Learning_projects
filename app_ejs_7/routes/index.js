const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");
const cartController = require("../controllers/cartController");
const Shop = require("../models/Shop");
const Product = require("../models/Product");

router.get("/shop/create", shopController.loadCreateShopPage);
router.post("/shop/create", shopController.createShop);
router.get("/shop/select/:id", shopController.selectShop);

router.get("/cart", cartController.loadCartPage);
router.get("/product/addToCart/:productId", cartController.addToCart);
router.get("/cart/deleteAll", cartController.clearCart);

router.get("/", shopController.loadShoppingPage);

module.exports = router;
