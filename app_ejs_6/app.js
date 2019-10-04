const WebServer = require("./web.server");
const mongoose = require("mongoose");

let webServer = new WebServer();

// load environment variables
require("dotenv").config({ path: "process.env" });

// set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB, {
  useNewUrlParser: true
});

webServer
  .start()
  .then(() => {
    console.log("Web server started at port 3000");
  })
  .catch(err => {
    console.error(err);
    console.error("Failed to start web server");
  });
