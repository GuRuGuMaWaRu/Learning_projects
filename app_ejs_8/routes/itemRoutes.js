const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/create", itemController.renderCreateItemForm);
router.post("/create", itemController.createItem);

module.exports = router;
