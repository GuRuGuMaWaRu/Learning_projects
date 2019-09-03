const Shop = require("../models/Shop");
const db = require("../db");

module.exports = {
  index: async (req, res) => {
    const shops = [];

    db.getDb()
      .db()
      .collection("shops")
      .find({})
      .project({ name: 1, tags: 1 })
      .sort({ name: 1 })
      .forEach(shopDoc => {
        shops.push(shopDoc);
      })
      .then(result => {
        console.log(shops);
        res.status(200).json(shops);
      });
    // const shops = await Shop.find({}, "name tags");
    // res.send(shops);
  },
  withTags: async (req, res) => {
    const tags = Object.values(req.query);
    const shops = await Shop.find({ tags: { $in: tags } }, "name");
    res.send(shops);
  }
};
