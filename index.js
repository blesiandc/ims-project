const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect mongodb using Mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/imsproj-db")
  .then(() => console.log("Connection open"))
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

// Routes
app.use("/items", itemRoutes);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
