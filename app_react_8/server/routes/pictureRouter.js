const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(201).json({
    message: "Picture saved!"
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Picture retrieved!"
  });
});

module.exports = router;
