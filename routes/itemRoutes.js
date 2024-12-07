const express = require("express");
const itemController = require("../controllers/itemController");
const router = express.Router();

router.get("/", itemController.getAllItems);
router.get("/addForm", itemController.addForm);
router.post("/add", itemController.addItem);
// router.put("/:id", itemController.updateItem);
// router.get("/:id", itemController.getItem);

module.exports = router;
