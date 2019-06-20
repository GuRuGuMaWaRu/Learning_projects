const express = require("express");

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
