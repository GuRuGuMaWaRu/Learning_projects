const express = require("express");
const router = express.Router();
const entryController = require("../controllers/entryController");

router.post("/save", entryController.save);

module.exports = router;
