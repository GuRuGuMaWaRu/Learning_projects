const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const db = require("../db");

describe("Shop controller", () => {
  it("should return a particular shop data on GET request to /api/shops/:id", done => {
    const shop1 = {
      name: "Shop 1",
      description: "should return all shops on GET request to /api/shop",
      products: [
        {
          shopId: "this._id",
          name: "Long sword +1",
          price: 1200
        }
      ],
      tags: ["magic", "weapons"]
    };
    const shop2 = {
      name: "Shop 2",
      description: "should return again all shops on GET request to /api/shop",
      products: [
        {
          shopId: "this._id",
          name: "Long sword",
          price: 30
        }
      ],
      tags: ["weapons"]
    };

    db.getDb()
      .db()
      .collection("shops")
      .insertMany([shop1, shop2])
      .then(() => {
        done();
      });
  });
});
