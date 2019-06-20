const express = require("express");
const bodyParser = require("body-parser");

const appRouter = require("./routes/appRoutes");
const itemRouter = require("./routes/itemRoutes");

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/app");
});

app.use("/app", appRouter);
app.use("/item", itemRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
