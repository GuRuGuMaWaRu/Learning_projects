const express = require("express");
const router = express.Router();
const appController = require("../controllers");

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/blogposts", appController.index);

router.post("/blogposts", (req, res) => {
  res.send("Create");
});

router.get("/blogposts/:id", (req, res) => {
  res.send("Read");
});

router.put("/blogposts/:id", (req, res) => {
  res.send("Update");
});

router.delete("/blogposts/:id", (req, res) => {
  res.send("Delete");
});

module.exports = router;
