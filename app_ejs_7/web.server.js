const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

module.exports = class WebServer {
  constructor() {
    this.app = express();
    this.app.set("view engine", "ejs");
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
    this.app.use("/", routes);
  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(3000, () => resolve());
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });
  }

  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => resolve());
      } catch (e) {
        console.error(e.message);
        reject(e);
      }
    });
  }
};
