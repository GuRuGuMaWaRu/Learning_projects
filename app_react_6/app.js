const express = require("express");
const app = express();

// load environment variables
require("dotenv").config();

// Set up port variable in express
app.set("port", process.env.PORT || 5000);

module.exports = app;
