const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/", appController.renderJournal);

module.exports = router;
