const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// add product to cart
router.post("/", cartController.save);
router.delete("/:id", cartController.delete);
router.patch("/:operation/:id", cartController.changeQty);

module.exports = router;
