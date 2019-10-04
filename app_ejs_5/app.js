const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//:: import all models
require("./models/Item");
require("./models/List");

// load environment variables
require("dotenv").config({ path: "process.env" });

const routes = require(__dirname + "/routes");

const app = express();

//:: Set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB, {
  useNewUrlParser: true
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routes);

app.listen(3000, () => console.log("Server is running on port 3000..."));
