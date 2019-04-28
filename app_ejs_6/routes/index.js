const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const themeController = require("../controllers/themeController");
const itemController = require("../controllers/itemController");

// theme routes
router.post("/theme/add", themeController.addTheme);
router.get("/theme/select/:id", themeController.selectTheme);
router.get("/theme/delete/:id", themeController.deleteTheme);
// item routes
router.post("/item/add", itemController.saveItem);
router.get("/item/select/:id", itemController.selectItem);
router.get("/item/delete/:itemId/:themeId", itemController.deleteItem);
// app routes
router.get("/", appController.mainPage);

module.exports = router;
