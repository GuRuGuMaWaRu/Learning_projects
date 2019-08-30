const assert = require("assert");
const request = require("supertest");
const queryString = require("query-string");
const app = require("../app");
const Shop = require("../models/Shop");

describe("Shop controller", () => {
  it("should return shops with provided tags on GET request to /api/shop?tags", done => {
    const shop1 = new Shop({
      name: "Shop 1",
      description: "First shop",
      tags: ["travel", "armor", "magic"]
    });
    const shop2 = new Shop({
      name: "Shop 2",
      description: "Second shop",
      tags: ["weapons", "magic"]
    });
    const shop3 = new Shop({
      name: "Shop 3",
      description: "Third shop",
      tags: ["armor", "magic", "weapons"]
    });

    const tags = ["armor", "travel"];
    const stringified = queryString.stringify(tags);
    const query = `/api/shop?${stringified}`;
    console.log(query);

    Promise.all([shop1.save(), shop2.save(), shop3.save()]).then(() => {
      request(app)
        .get(`/api/shop?${stringified}`)
        .expect(200)
        .end((err, res) => {
          assert(res.body.length === 2);
          // another assert
        });
    });
  });
});
