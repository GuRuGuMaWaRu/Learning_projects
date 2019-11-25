const express = require("express");
const morgan = require("morgan");
const app = express();

// Init middleware
app.use(morgan("dev"));

// Define Routes
app.use("/api/swords", (req, res) => {
  res.status(200).json({ msg: "Swords route" });
});
app.use("/api/user", (req, res) => {
  res.status(200).json({ msg: "User route" });
});
app.use("/api/auth", (req, res) => {
  res.status(200).json({ msg: "Auth route" });
});

// Handle 404 errors
app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});
// Handle all errors
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ msg: err.message });
});

// Run Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
