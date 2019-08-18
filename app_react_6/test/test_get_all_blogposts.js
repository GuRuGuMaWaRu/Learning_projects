const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const BlogPost = require("../models/BlogPost");

describe("App controller", () => {
  it("should return all blogposts on GET request to /api/blogposts", done => {
    const blogpost1 = new BlogPost({
      author: "Peter",
      title: "INDEX",
      body: "GET request to /api/blogposts."
    });
    const blogpost2 = new BlogPost({
      author: "Bob",
      title: "INDEX 2",
      body: "GET request to /api/blogposts."
    });

    Promise.all([blogpost1.save(), blogpost2.save()]).then(() => {
      request(app)
        .get("/api/blogposts")
        .expect(200)
        .end((err, res) => {
          assert(res.body[0].author === "Peter");
          assert(res.body[1].author === "Bob");
          done();
        });
    });
  });
});
