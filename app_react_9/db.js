const mongoose = require("mongoose");
const config = require("config");

const runDatabase = async () => {
  mongoose.connection.on("open", () => {
    console.log("Connection with development database is established...");
  });
  mongoose.connection.on("error", err => {
    console.log("Database error:", err);
  });

  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = runDatabase;
