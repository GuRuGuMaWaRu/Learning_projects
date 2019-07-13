const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./routes");

const app = express();

// load environment variables
require("dotenv").config({ path: "process.env" });

// connect to mongoDB
mongoose.connect(process.env.DB, { useNewUrlParser: true });

// Set up port variable in express
app.set("port", process.env.PORT || 5000);

// Connect main router
app.use("/api", appRouter);

module.exports = app;
