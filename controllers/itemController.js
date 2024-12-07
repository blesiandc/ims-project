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
    res.status(201).json({
      message: "Item created successfully.",
    });
  } catch (err) {
    res
      .status(500)
      .json({ err: "An error occurred while adding the product." });
  }
};

// exports.updateItem = async (req, res) => {
//   const id = req.params.id;
//   const { name, category, quantity, price, description } = req.body;

//   try {
//     const updateItem = await Items.findByIdAndUpdate(
//       id,
//       { name, category, quantity, price, description },
//       { new: true }
//     );

//     if (!id) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     res.status(201).json({
//       message: "Item updated successfully.",
//       updateItem,
//     });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ err: "An error occurred while editing the product." });
//   }
// };
