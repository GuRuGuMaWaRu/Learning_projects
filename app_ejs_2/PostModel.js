const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  date: String,
  title: String,
  body: String
});

const Post = mongoose.model("Post", postsSchema);

module.exports = Post;
