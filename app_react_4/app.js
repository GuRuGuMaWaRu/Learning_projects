const express = require("express");
const bodyParser = require("body-parser");
const entryRoutes = require("./routes/entryRoutes");

require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/entry", entryRoutes);

module.exports = app;
