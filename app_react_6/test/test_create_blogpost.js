const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const BlogPost = require("../models/BlogPost");

describe("App controller", () => {
  it("should create a new blogpost on POST request to /api/blogposts", done => {
    BlogPost.countDocuments().then(count => {
      request(app)
        .post("/api/blogposts")
        .send({
          author: "Peter",
          title: "CREATE",
          body: "POST request to /api/blogposts."
        })
        .expect(200)
        .end((err, res) => {
          BlogPost.countDocuments().then(newCount => {
            assert(newCount === count + 1);
            done();
          });
        });
    });
  });
});
