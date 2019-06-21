const express = require("express");
const router = express.Router();
const { createItem } = require("../controllers/itemController");

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/create", (req, res) => {
  res.render("create-item-page");
});

router.post("/create", createItem);

module.exports = router;
