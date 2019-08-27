const assert = require("assert");
const request = require("supertest");
const Shop = require("../models/Shop");
const app = require("../app");

describe("Shop controller", () => {
  it("should return all shops on GET request to /api/shop", done => {
    const shop1 = new Shop({
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
    });
    const shop2 = new Shop({
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
    });

    Promise.all([shop1.save(), shop2.save()]).then(() => {
      request(app)
        .get("/shop")
        .expect(200)
        .end((err, res) => {
          assert(res.body.length === 2);
          assert(Object.keys(res.body[0]).length === 3);
          done();
        });
    });
  });
});
