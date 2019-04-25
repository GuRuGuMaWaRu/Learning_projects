const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  list: {
    type: mongoose.Schema.ObjectId,
    ref: "List"
  },
  finished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Item", itemSchema);
