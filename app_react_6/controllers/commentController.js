const BlogPost = require("../models/BlogPost");

module.exports = {
  create: async (req, res) => {
    const { postId, author, text } = req.body;
    const updatedBlogpost = await BlogPost.findByIdAndUpdate(
      postId,
      {
        $push: { comments: { author, text } }
      },
      { new: true }
    );
    res.send(updatedBlogpost);
  },
  update: async (req, res) => {
    const { blogpostId, commentId } = req.params;

    const updatedBlogpost = await BlogPost.findOneAndUpdate(
      { _id: blogpostId, "comments._id": commentId },
      {
        $inc: { "comments.$.likes": 1 }
      },
      { new: true }
    );

    res.send(updatedBlogpost);
  }
};
