const Shop = require("../models/Shop");
const queryString = require("query-string");

module.exports = {
  index: async (req, res) => {
    const shops = await Shop.find({}, "name tags");
    res.send(shops);
  },
  withTags: async (req, res) => {
    const tags = Object.values(req.query);
    const shops = await Shop.find({ tags: { $in: tags } }, "name");
    res.send(shops);
  }
};
