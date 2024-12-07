const Items = require("../models/itemModel");
const moment = require("moment");

// Get all products
exports.getAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    // console.log(items, "items");
    res.render("index", { items, moment });
  } catch (err) {
    res
      .status(500)
      .json({ err: "An error occurred while fetching the products" });
  }
};

exports.addForm = (req, res) => {
  res.render("add");
};

// Add Product
exports.addItem = async (req, res) => {
  const { name, category, quantity, price, description } = req.body;

  try {
    const item = new Items({ name, category, quantity, price, description });
    await item.save();
    res.status(200).json({
      message: "Item created successfully.",
    });
  } catch (err) {
    res
      .status(500)
      .json({ err: "An error occurred while adding the product." });
  }
};

exports.editForm = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.render("edit", { item });
  } catch (err) {
    res.status(500).json({ err: "An error occurred while fetching the item." });
  }
};

exports.updateItem = async (req, res) => {
  const id = req.params.id;
  const { name, category, quantity, price, description } = req.body;

  try {
    const updatedItem = await Items.findByIdAndUpdate(
      id,
      { name, category, quantity, price, description },
      { new: true }
    );

    res.status(200).json({
      message: "Item updated successfully.",
      item: updatedItem,
    });
  } catch (err) {
    res
      .status(500)
      .json({ err: "An error occurred while editing the product." });
  }
};
