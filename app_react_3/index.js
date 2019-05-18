const express = require("express");
const proxy = require("http-proxy-middleware");

const app = express();

app.use(
  "/api",
  proxy({
    target: "http://localhost:5000",
    changeOrigin: true
  })
);

require("./routes")(app);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
