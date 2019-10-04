const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController.js");

/* GET all shops. */
router.get("/", shopController.index);
/* GET all shops with provided tags. */
router.get("/tags", shopController.withTags);
/* GET a particular shop */
router.get("/:shopId", shopController.read);

module.exports = router;
