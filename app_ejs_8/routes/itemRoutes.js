const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/create", (req, res) => {
  res.render("create-item-page");
});

router.post("/create", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
