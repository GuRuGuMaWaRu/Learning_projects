const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const appRouter = require("./routes/appRoutes");
const itemRouter = require("./routes/itemRoutes");

const app = express();
const port = 3000;

// load environment variables
require("dotenv").config({ path: "process.env" });

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB, { useNewUrlParser: true });

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
