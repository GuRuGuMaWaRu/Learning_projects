const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const db = require("../db");

const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

describe("Cart controller", () => {
  it("should decrease qty for a given product on PATCH request to /cart/decrease/:id", done => {
    db.getDb()
      .db()
      .collection("cartItems")
      .insertOne({
        shopId: "dsafddsaf5489854",
        productId: "kjlkdj5kl5g34tf43",
        qty: 10
      })
      .then(res => {
        request(app)
          .patch(`/cart/decrease/${res.ops[0]._id}`)
          .expect(200)
          .end((err, res) => {
            assert(res.body.updatedDocument.qty === 9);
            done();
          });
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });
});
