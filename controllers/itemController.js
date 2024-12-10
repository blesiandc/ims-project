const Items = require("../models/itemModel");
const moment = require("moment");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    res.render("index", { items, moment });
  } catch (err) {
    res.status(500).json({ err: "An error occurred while fetching the item" });
  }
};

exports.addForm = (req, res) => {
  res.render("add");
};

exports.addItem = async (req, res) => {
  try {
    const item = new Items(req.body);
    await item.save();

    // res.status(200).json({
    //   message: "Item created successfully.",
    //   item,
    // });
    res.redirect("/items");
  } catch (err) {
    res.status(500).json({ err: "An error occurred while adding the item." });
  }
};

exports.viewItem = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.render("show", { item });
  } catch (err) {
    res.status(500).json({ err: "An error occurred while fetching the item." });
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
  try {
    const updatedItem = await Items.findByIdAndUpdate(id, { ...req.body });
    // res.status(200).json({
    //   message: "Item updated successfully.",
    //   updatedItem,
    // });
    res.redirect(`/items/${id}`);
  } catch (err) {
    res.status(500).json({ err: "An error occurred while editing the item." });
  }
};

exports.deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedItem = await Items.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    // res.status(200).json({
    //   message: "Item deleted successfully.",
    // });
    res.redirect("/items");
  } catch (err) {
    res.status(500).json({ err: "An error occurred while deleting the item" });
  }
};
