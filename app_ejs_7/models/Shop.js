const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    type: String,
    required: "You must provide a shop name."
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  selected: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Shop", shopSchema);
