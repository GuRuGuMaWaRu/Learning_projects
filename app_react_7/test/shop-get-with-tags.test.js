const assert = require("assert");
const request = require("supertest");
const queryString = require("query-string");
const app = require("../app");
const db = require("../db");

describe("Shop controller", () => {
  it("should return shops with provided tags on GET request to /api/shops?tags", done => {
    const shop1 = {
      name: "Shop 1",
      description: "First shop",
      tags: ["travel", "armor", "magic"]
    };
    const shop2 = {
      name: "Shop 2",
      description: "Second shop",
      tags: ["weapons", "magic"]
    };
    const shop3 = {
      name: "Shop 3",
      description: "Third shop",
      tags: ["armor", "magic", "weapons"]
    };

    const tags = ["armor", "travel"];
    const stringified = queryString.stringify(tags);

    db.getDb()
      .db()
      .collection("shops")
      .insertMany([shop1, shop2, shop3])
      .then(() => {
        request(app)
          .get(`/shops/tags?${stringified}`)
          .expect(200)
          .end((err, res) => {
            assert(res.body.length === 2);
            assert(res.body[0].name === "Shop 1");
            assert(res.body[1].name === "Shop 3");
            done();
          });
      });
  });
});
