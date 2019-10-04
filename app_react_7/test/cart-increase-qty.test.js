const mongodb = require("mongodb");
const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const db = require("../db");
const ObjectId = mongodb.ObjectId;

describe("Cart controller", () => {
  it("should increase qty for a given product on PATCH request to /cart/increase/:id", done => {
    db.getDb()
      .db()
      .collection("cartItems")
      .insertOne({
        shopId: "dsafddsaf43250",
        productId: "kjlkdj5kl54jlfd",
        qty: 1
      })
      .then(result => {
        request(app)
          .patch(`/cart/increase/${result.insertedId}`)
          .expect(200)
          .end((err, res) => {
            assert(res.body.updatedDocument.qty === 2);
            done();
          });
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });
});
