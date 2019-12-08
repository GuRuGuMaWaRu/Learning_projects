const express = require("express");
const morgan = require("morgan");
const runDatabase = require("./db");

const app = express();

// Run database
runDatabase();

// Init middleware
app.use(morgan("dev"));
app.use(express.json());

// Define Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));

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
