const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const listController = require("../controllers/listController");
const itemController = require("../controllers/itemController");

// items
router.post("/addItem", itemController.addItem);
router.get("/delete/:itemId/:listId", itemController.deleteItem);
router.get("/edit/:itemId/:listId", itemController.editItem);
router.post("/update/:itemId", itemController.updateItem);
router.post("/done/:id", itemController.finishItem);
// lists
router.get("/:listId", listController.getList);
router.post("/addList", listController.addList);
router.get("/deleteList/:listId", listController.deleteList);

router.get("/", appController.homePage);

module.exports = router;
