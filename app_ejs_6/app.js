const WebServer = require("./web.server");

let webServer = new WebServer();

webServer
  .start()
  .then(() => {
    console.log("Web server started at port 3000");
  })
  .catch(err => {
    console.error(err);
    console.error("Failed to start web server");
  });
