const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalItemSchema = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model("journalItem", JournalItemSchema);
