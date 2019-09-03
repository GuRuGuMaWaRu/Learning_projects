const mongoose = require("mongoose");
const WebServer = require("./web.server");

// load environment variables
require("dotenv").config({ path: "process.env" });

// set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB, { useNewUrlParser: true });

const webServer = new WebServer();

webServer
  .start()
  .then(() => {
    console.log("Web server started at port 3000");
  })
  .catch(err => {
    console.error(err);
    console.error("Failed to start web server");
  });
