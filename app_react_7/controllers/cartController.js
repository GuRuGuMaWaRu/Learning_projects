const db = require("../db");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

module.exports = {
  save: async (req, res) => {
    db.getDb()
      .db()
      .collection("cartItems")
      .insertOne(req.body)
      .then(result => {
        res.status(201).json({
          message: "Item added to Cart",
          _id: result.ops[0]._id
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  },
  delete: async (req, res) => {
    db.getDb()
      .db()
      .collection("cartItems")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then(result => {
        res.status(200).json({
          message: "Cart Item deleted successfully"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }
};
