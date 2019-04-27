const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const themeController = require("../controllers/themeController");
const postController = require("../controllers/postController");

// theme routes
router.post("/", themeController.addTheme);
// post routes
// app routes
router.get("/", appController.mainPage);

module.exports = router;
