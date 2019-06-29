const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const entryRoutes = require("./routes/entryRoutes");

require("dotenv").config();

const app = express();

// set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb+srv://GuRuGu:i44iYtewBM21noYb@cluster0-z8edg.mongodb.net/app_react_4",
  { useNewUrlParser: true }
);

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/entry", entryRoutes);

module.exports = app;
