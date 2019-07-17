const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const appRouter = require("./routes");

const app = express();

// load environment variables
require("dotenv").config({ path: "process.env" });

// connect to mongoDB
mongoose.set("useFindAndModify", false);

if (process.env.NODE_ENV === "development") {
  mongoose.connect(process.env.DB, { useNewUrlParser: true });
  mongoose.connection.once("open", () =>
    console.log("Connection with development database is established.")
  );
}

// add bodyParser to process form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // without this axios.post won't work!!!

// Set up port variable in express
app.set("port", process.env.PORT || 5000);

// Connect main router
app.use("/api", appRouter);

module.exports = app;
