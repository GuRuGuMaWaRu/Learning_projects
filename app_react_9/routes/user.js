const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/user");

// @route     POST api/user
// @desc      Register a user
// @access    Public
router.post("/", async (req, res) => {
  const { name, email, password1 } = req.body;

  try {
    // Check is this email is already registered
    let user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({ msg: "Email already registered" });
    }

    user = new User({
      name,
      email,
      password: password1
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password1, salt);

    // Save newly registered user
    await user.save();

    // Prepare token and sent it back to the client
    jwt.sign(
      { user: user._id },
      config.get("jwtsecret"),
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) throw err;
        res.status(201).json(token);
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
