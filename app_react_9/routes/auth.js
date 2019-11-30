const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  console.log(req.body);
  res.status(200).json({ msg: "Logged in" });
});

module.exports = router;
