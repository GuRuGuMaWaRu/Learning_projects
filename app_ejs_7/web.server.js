const express = require("express");

module.exports = class WebServer {
  constructor() {
    this.app = express();
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
};
