const assert = require("assert");
const request = require("supertest");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const app = require("../app");
const db = require("../db");

describe("Cart controller", () => {
  it("should add a product into cart on POST request to /cart", done => {
    request(app)
      .post("/cart")
      .send({
        shopId: "dsafddsaf43244",
        productId: "kjlkdj5kl54jlk",
        qty: 1
      })
      .expect(201)
      .end((err, res) => {
        const id = res.body._id;
        db.getDb()
          .db()
          .collection("cartItems")
          .findOne({ _id: ObjectId(id) })
          .then(foundDoc => {
            assert(id.toString() === foundDoc._id.toString());
            done();
          });
      });
  });
});
