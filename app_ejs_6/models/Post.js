const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: "You must supply a post title"
  },
  text: {
    type: String,
    required: "You must supply a post text"
  },
  theme: {
    type: mongoose.Schema.ObjectId,
    ref: "Theme"
  }
});

module.exports = mongoose.model("Topic", postSchema);
