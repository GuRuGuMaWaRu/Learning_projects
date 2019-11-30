const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("json-webtoken");

const User = require("../models/user");

router.post("/", async (req, res) => {
  const { name, email, password1 } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({ msg: "Email already registered" });
    }

    user = new User({
      name,
      email,
      password: password1
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
  console.log(req.body);
  res.status(200).json({ msg: "Registered" });
});

module.exports = router;
