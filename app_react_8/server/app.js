const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// load environment variables
require("dotenv").config({ path: "process.env" });

const pictureRouter = require("./routes/pictureRouter");

// create Express app
const app = express();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database
if (process.env.NODE_ENV === "development") {
  mongoose.connect(process.env.DB_MAIN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

// handle app routes
app.use("/pictures", pictureRouter);

// handle 404 errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// handle all errors
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

module.exports = app;
