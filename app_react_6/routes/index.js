const express = require("express");
const router = express.Router();
const appController = require("../controllers");

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/blogposts", appController.index);
router.post("/blogposts", appController.create);
router.get("/blogposts/:id", appController.read);
router.put("/blogposts/:id", appController.update);

router.delete("/blogposts/:id", (req, res) => {
  res.send("Delete");
});

module.exports = router;
