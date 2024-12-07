const express = require("express");
const itemController = require("../controllers/itemController");
const router = express.Router();

router.get("/", itemController.getAllItems);
router.get("/addForm", itemController.addForm);
router.post("/add", itemController.addItem);
router.get("/:id", itemController.editForm);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);
module.exports = router;
