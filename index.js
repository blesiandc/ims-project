const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/items", (req, res) => {
  const sample = "Hello Bless";
  console.log(sample);
  //   res.send("Hello");
  res.render("index", { sample });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
