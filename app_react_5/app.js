const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// set up DB
mongoose.set("useFindAndModify", false);

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(
    "mongodb+srv://GuRuGu:i44iYtewBM21noYb@cluster0-z8edg.mongodb.net/app_react_5",
    { useNewUrlParser: true }
  );
}

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes")(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
