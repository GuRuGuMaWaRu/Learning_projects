const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: "You must supply a item title"
  },
  text: {
    type: String,
    required: "You must supply a item text"
  },
  theme: {
    type: mongoose.Schema.ObjectId,
    ref: "Theme"
  }
});

module.exports = mongoose.model("Item", itemSchema);
