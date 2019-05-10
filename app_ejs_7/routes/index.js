const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const shopController = require("../controllers/shopController");
const cartController = require("../controllers/cartController");

router.get("/shop/create", shopController.loadCreateShopPage);
router.post("/shop/create", shopController.createShop);
router.get("/shop/select/:id", shopController.selectShop);
router.get("/shop/edit", shopController.loadEditShopsPage);
router.get("/shop/edit/:shopId", shopController.editShop);
router.post("/shop/update", shopController.updateShop);

router.get("/cart", cartController.loadCartPage);
router.get("/product/addToCart/:productId", cartController.addToCart);
router.get("/cart/deleteAll", cartController.deleteAll);
router.get("/cart/deleteOne/:itemId", cartController.deleteOne);
router.get("/cart/increase/:itemId", cartController.increase);
router.get("/cart/decrease/:itemId", cartController.decrease);

router.post("/changeCurrency", appController.changeCurrency);
router.get("/", appController.loadShoppingPage);

module.exports = router;
