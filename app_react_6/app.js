const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./routes");

const app = express();

// load environment variables
require("dotenv").config({ path: "process.env" });

console.log(process.env.NODE_ENV);
// connect to mongoDB
if (process.env.NODE_ENV === "development") {
  mongoose.connect(process.env.DB, { useNewUrlParser: true });
  mongoose.connection.once("open", () =>
    console.log("Connection with development database is established.")
  );
}

// Set up port variable in express
app.set("port", process.env.PORT || 5000);

// Connect main router
app.use("/api", appRouter);

module.exports = app;
