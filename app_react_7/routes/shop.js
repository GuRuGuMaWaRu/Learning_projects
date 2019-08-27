const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController.js");

/* GET all shops. */
router.get("/", shopController.index);

module.exports = router;
