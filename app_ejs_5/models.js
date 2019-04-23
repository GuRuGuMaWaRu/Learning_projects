const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  finished: { type: Boolean, default: false }
});

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [itemSchema]
});

const Item = new mongoose.model("Item", itemSchema);
const List = new mongoose.model("List", listSchema);

module.exports = { Item, List };
