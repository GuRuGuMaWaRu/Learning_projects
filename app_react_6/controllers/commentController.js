const BlogPost = require("../models/BlogPost");

module.exports = {
  create: async (req, res) => {
    const { blogpostId, author, text } = req.body;
    const updatedBlogpost = await BlogPost.findByIdAndUpdate(blogpostId, {
      $push: { comments: { author, text } }
    });
    res.send(updatedBlogpost);
  }
};
