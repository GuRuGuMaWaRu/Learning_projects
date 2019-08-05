const BlogPost = require("../models/BlogPost");

module.exports = {
  create: async (req, res) => {
    const { postId, author, text } = req.body;
    const updatedBlogpost = await BlogPost.findByIdAndUpdate(postId, {
      $push: { comments: { author, text } }
    });
    res.send(updatedBlogpost);
  }
};
