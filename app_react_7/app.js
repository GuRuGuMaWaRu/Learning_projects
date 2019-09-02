const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const mongoose = require("mongoose");

const shopRouter = require("./routes/shop");
const usersRouter = require("./routes/users");

const app = express();

// load environment variables
// require("dotenv").config({ path: "process.env" });

// connect to mongoDB
// if (process.env.NODE_ENV === "development") {
//   mongoose.connect(process.env.DB, { useNewUrlParser: true });
//   mongoose.connection.once("open", () =>
//     console.log("Connected to development DB.")
//   );
// }

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/shop", shopRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
