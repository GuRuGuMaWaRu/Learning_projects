const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// add product to cart
router.post("/", cartController.save);

module.exports = router;