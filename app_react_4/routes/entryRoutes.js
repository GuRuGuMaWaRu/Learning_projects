const express = require("express");
const router = express.Router();
const entryController = require("../controllers/entryController");

router.get("/index", entryController.index);
router.post("/create", entryController.create);
router.get("/get/:id", entryController.get);
router.delete("/delete/:id", entryController.delete);

module.exports = router;
