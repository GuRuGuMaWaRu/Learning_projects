const express = require("express");
const routes = require("./routes");

module.exports = class WebServer {
  constructor() {
    this.app = express();
    this.app.set("view engine", "ejs");
    this.app.use("/", routes);
  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        this.app.listen(3000, () => {
          console.log("Server is running on port 3000");
        });
        resolve();
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });
  }

  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.app.stop();
        resolve();
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });
  }
};
