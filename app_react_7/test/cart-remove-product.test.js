const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const db = require("../db");

describe("Cart controller", () => {
  it("should remove a product from cart on DELETE request to /cart", done => {
    const client = db.getDb().db();

    db.getDb()
      .db()
      .collection("cartItems")
      .insertOne({
        shopId: "dsafddsaf43244",
        productId: "kjlkdj5kl54jlk",
        qty: 1
      })
      .then(result => {
        db.getDb()
          .db()
          .collection("cartItems")
          .find()
          .toArray()
          .then(cartItems => {
            const id = cartItems[0]._id;
            request(app)
              .delete(`/cart/${id}`)
              .expect(200)
              .end((err, res) => {
                db.getDb()
                  .db()
                  .collection("cartItems")
                  .find()
                  .toArray()
                  .then(newCartItems => {
                    assert(newCartItems.length === 0);
                    done();
                  });
              });
          });
      })
      .catch(err => {
        console.log(err);
      });
  });
});
