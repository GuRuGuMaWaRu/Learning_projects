const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config({ path: "process.env" });

const app = express();

// set up DB
mongoose.set("useFindAndModify", false);

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(process.env.DB, { useNewUrlParser: true });
}

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes")(app);

app.use((err, req, res, next) => {
  res.status(422).send({ Warning: err.message });
});

module.exports = app;
