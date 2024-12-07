const Items = require("../models/itemModel");
const moment = require("moment");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    // console.log(items, "items");
    res.render("index", { items, moment });
  } catch (err) {
    res.status(500).json({ err: "An error occurred while fetching the items" });
  }
};

// exports.addItems = async (req, res) => {
//   try {
//     const {name, category, }
//   } catch (err) {
//     res.status(500).json({ err: "An error occurred while adding an items" });
//   }
// };
