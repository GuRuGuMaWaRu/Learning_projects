const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/user");
const auth = require("../middleware/auth");

/*-------------------------
/ @route    GET api/auth
/ @desc     Load user
/ @access   Private
--------------------------*/
router.get("/", auth, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Wrong credentials" });
  }

  try {
    const user = await User.findOne({ _id: req.user }).select("email name");

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: err.message });
  }
});

/*-------------------------
/ @route    POST api/auth
/ @desc     Login user
/ @access   Public
--------------------------*/
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // No such user exists
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Prepare token and sent it back to the client
    jwt.sign(
      { user: user._id },
      config.get("jwtsecret"),
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
