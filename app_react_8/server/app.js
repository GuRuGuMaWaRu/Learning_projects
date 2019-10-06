const express = require("express");
const app = express();
const pictureRouter = require("./routes/pictureRouter");

// handle app routes
app.use("/pictures", pictureRouter);

// handle 404 errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// handle all errors
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
