const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.set("view engine", "ejs");

// Connect mongodb using mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/imsproj-db")
  .then(() => console.log("Connection open"))
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

app.use("/items", itemRoutes);

// const items = [
//   {
//     id: 1,
//     name: "Television",
//     category: "Electronics",
//     quantity: 10,
//     price: 1500.0,
//     description: "A sample electronic item.",
//     createdAt: "10/12/24",
//   },
//   {
//     id: 2,
//     name: "Laptop",
//     category: "Electronics",
//     quantity: 20,
//     price: 20000.0,
//     description: "A sample electronic item.",
//     createdAt: "11/20/24",
//   },
//   {
//     id: 3,
//     name: "Computer",
//     category: "Electronics",
//     quantity: 5,
//     price: 5600.0,
//     description: "A sample electronic item.",
//     createdAt: "12/30/24",
//   },
//   {
//     id: 4,
//     name: "Computer",
//     category: "Electronics",
//     quantity: 5,
//     price: 5600.0,
//     description: "A sample electronic item.",
//     createdAt: "12/30/24",
//   },
// ];

// // List of all items
// app.get("/items", (req, res) => {
//   //   const sample = "Hello Bless";
//   //   console.log(sampleData);
//   //   res.send("Hello");
//   res.render("index", { items });
// });

// // Show specific item
// app.get("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const item = items.find((i) => i.id === id);
//   res.redirect("show", { item });
// });

// // Add new item Form
// app.get("/items/add", (req, res) => {
//   res.render("add");
// });
// // Add new item
// app.post("/items", (req, res) => {
//   res.sender("Add new item");
// });

app.listen(3000, () => {
  console.log("Running on port 3000");
});
