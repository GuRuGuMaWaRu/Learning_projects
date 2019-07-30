const BlogPost = require("../models/BlogPost");

module.exports = {
  create: async (req, res) => {
    const { blogpostId, author, text } = req.body;
    await BlogPost.updateOne(
      { _id: blogpostId },
      { $push: { comments: { author, text } } }
    );
    res.send();
  }
};
