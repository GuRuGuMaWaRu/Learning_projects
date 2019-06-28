const express = require("express");
const router = express.Router();
const entryController = require("../controllers/entryController");

router.post("/create", entryController.create);

module.exports = router;
