const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/item/create", (req, res) => {
  res.render("create-item-page");
});

app.post("/item/create", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
