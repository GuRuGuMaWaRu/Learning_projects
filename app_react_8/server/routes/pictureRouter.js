const express = require("express");
const router = express.Router();
const pictureController = require("../controllers/pictureController");

router.post("/", pictureController.save);
router.get("/", pictureController.get);

module.exports = router;
