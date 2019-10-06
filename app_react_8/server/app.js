const express = require("express");
const app = express();
const pictureRouter = require("./routes/pictureRouter");

app.use("/pictures", pictureRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
