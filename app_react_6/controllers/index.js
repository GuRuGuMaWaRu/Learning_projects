const Blogpost = require("../models/BlogPost");

module.exports = {
  index: async (req, res) => {
    const blogposts = await Blogpost.find();
    res.send(blogposts);
  }
};
