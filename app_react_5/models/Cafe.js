const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CafeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("cafe", CafeSchema);
