const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const themeController = require("../controllers/themeController");
const itemController = require("../controllers/itemController");

// theme routes
router.post("/", themeController.addTheme);
router.get("/:id", themeController.selectTheme);
// item routes
router.post("/theme", itemController.saveItem);
// app routes
router.get("/", appController.mainPage);

module.exports = router;
