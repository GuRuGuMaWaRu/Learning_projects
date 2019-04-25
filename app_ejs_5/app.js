const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//:: import all models
require("./models/Item");
require("./models/List");

const routes = require(__dirname + "/routes");

const app = express();

//:: Set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb+srv://GuRuGu:i44iYtewBM21noYb@cluster0-z8edg.mongodb.net/app_ejs_5",
  {
    useNewUrlParser: true
  }
);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routes);

app.listen(3000, () => console.log("Server is running on port 3000..."));
