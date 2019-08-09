const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const BlogPost = require("../models/BlogPost");

describe("App controller", () => {
  it("should get a certain blogpost on GET request to /api/blogposts/:id", done => {
    const blogpost3 = new BlogPost({
      author: "Didly",
      title: "READ",
      body: "GET request to /api/blogposts/:id."
    });

    blogpost3.save().then(() => {
      request(app)
        .get(`/api/blogposts/${blogpost3._id}`)
        .expect(200)
        .end((err, res) => {
          assert(res.body.author === "Didly");
          done();
        });
    });
  });
});
