const WebServer = require("./web.server");

const server = new WebServer();

server.start().then(() => {
  console.log("Starting...");
});
