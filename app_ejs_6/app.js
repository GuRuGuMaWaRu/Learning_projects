const WebServer = require("./web.server");
const mongoose = require("mongoose");

let webServer = new WebServer();

// set up DB
mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb+srv://GuRuGu:i44iYtewBM21noYb@cluster0-z8edg.mongodb.net/app_ejs_6",
  {
    useNewUrlParser: true
  }
);

webServer
  .start()
  .then(() => {
    console.log("Web server started at port 3000");
  })
  .catch(err => {
    console.error(err);
    console.error("Failed to start web server");
  });
