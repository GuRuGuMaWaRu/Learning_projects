const mongoose = require("mongoose");
const { Schema } = mongoose;

const Comment = new Schema({
  author: String,
  text: {
    type: String,
    required: [true, "Please provide text."]
  },
  likes: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const BlogPost = new Schema({
  author: {
    type: String,
    required: [true, "Please provide your name."]
  },
  title: {
    type: String,
    required: [true, "Please provide a title."]
  },
  body: {
    type: String,
    required: [true, "Please provide some text."]
  },
  comments: [Comment],
  likes: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("blogpost", BlogPost);
