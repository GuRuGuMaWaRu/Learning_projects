const db = require("../db");

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
  }
};
