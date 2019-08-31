const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController.js");

/* GET all shops. */
router.get("/", shopController.index);
/* GET all shops with provided tags. */
router.get("/tags", shopController.withTags);

module.exports = router;
