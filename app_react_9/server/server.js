const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Swords API" });
});

// Define Routes
app.get("/api/swords", (req, res) => {
  res.status(200).json({ msg: "Swords route" });
});
app.get("/api/user", (req, res) => {
  res.status(200).json({ msg: "User route" });
});
app.get("/api/auth", (req, res) => {
  res.status(200).json({ msg: "Auth route" });
});

// Run Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
