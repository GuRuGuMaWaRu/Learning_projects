const mongoose = require("mongoose");
const { Schema } = mongoose;

const Comment = new Schema({
  author: String,
  text: {
    tyle: String,
    required: "Please provide text."
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
    required: "Please provide your name."
  },
  title: {
    type: String,
    required: "Please provide a title."
  },
  body: {
    type: String,
    required: "Please provide some text."
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

mongoose.model("blogpost", BlogPost);
