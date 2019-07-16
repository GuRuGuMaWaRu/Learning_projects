const BlogPost = require("../models/BlogPost");

module.exports = {
  index: async (req, res) => {
    const blogposts = await BlogPost.find();
    res.send(blogposts);
  },
  create: async (req, res) => {
    const blogpost = req.body;
    await BlogPost.create(blogpost);
    res.send();
  }
};
