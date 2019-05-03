const express = require("express");
const router = express.Router();

router.get("/shop/create", (req, res) => {
  res.render("shopCreate");
});

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
