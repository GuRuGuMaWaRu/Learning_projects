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
  },
  read: async (req, res) => {
    const id = req.params.id;
    const blogpost = await BlogPost.findById(id);
    res.send(blogpost);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    await BlogPost.findByIdAndUpdate(id, data);
    res.send();
  },
  updateLike: async (req, res) => {
    const id = req.params.id;
    const blogpost = await BlogPost.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.send(blogpost);
  },
  destroy: async (req, res) => {
    const id = req.params.id;
    await BlogPost.deleteOne({ _id: id });
    res.send();
  }
};
