const express = require("express");
const appRouter = require("./routes");
const app = express();

// load environment variables
require("dotenv").config();

// Set up port variable in express
app.set("port", process.env.PORT || 5000);

// Connect main router
app.use("/api", appRouter);

module.exports = app;
