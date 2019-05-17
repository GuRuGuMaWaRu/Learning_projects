const express = require("express");

const app = express();

require("./routes")(app);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
