const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const entryRoutes = require("./routes/entryRoutes");

// load environment variables
require("dotenv").config({ path: "process.env" });

const app = express();

// set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB, { useNewUrlParser: true });

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/entry", entryRoutes);

module.exports = app;
