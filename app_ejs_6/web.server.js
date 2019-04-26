const express = require("express");
const bodyParser = require("body-parser");

module.exports = class WebServer {
  constructor() {
    this.app = express();
    this.app.set("view engine", "views");
    this.app.use(express.static("public"));
    this.app.use(bodyParser.urlencoded({ extended: true }));
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
        this.server.close(() => {
          resolve();
        });
      } catch (e) {
        console.error(e.message);
        reject(e);
      }
    });
  }
};
