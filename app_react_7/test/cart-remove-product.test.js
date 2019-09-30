const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const db = require("../db");

describe("Cart controller", () => {
  it("should remove a product from cart on DELETE request to /cart", done => {
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
          .countDocuments()
          .then(count => {
            console.log(count);
          });
      })
      .catch(err => {
        console.log(err);
      });
  });
});
