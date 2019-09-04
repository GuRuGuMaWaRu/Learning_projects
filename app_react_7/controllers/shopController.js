const db = require("../db");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

module.exports = {
  index: async (req, res) => {
    const shops = [];

    db.getDb()
      .db()
      .collection("shops")
      .find({})
      .project({ name: 1, tags: 1 })
      .sort({ name: 1 })
      .forEach(shopDoc => shops.push(shopDoc))
      .then(result => res.status(200).json(shops))
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Error while getting all shops!" });
      });
  },
  withTags: async (req, res) => {
    const tags = Object.values(req.query);
    const shops = [];

    db.getDb()
      .db()
      .collection("shops")
      .find({ tags: { $in: tags } })
      .project({ name: 1 })
      .sort({ name: 1 })
      .forEach(shopDoc => shops.push(shopDoc))
      .then(result => res.status(200).json(shops))
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "Error while getting shops via tag search!" });
      });
  },
  read: async (req, res) => {
    const shopId = req.params.shopId;

    db.getDb()
      .db()
      .collection("shops")
      .findOne({ _id: new ObjectId(shopId) })
      .then(foundShop => {
        res.status(200).json(foundShop);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "Error while getting a particular shop" });
      });
  }
};
