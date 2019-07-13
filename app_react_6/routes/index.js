const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/blogposts", (req, res) => {
  res.send("Index");
});

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
