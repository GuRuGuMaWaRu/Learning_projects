const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.json({
    message: "Here we go!"
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
