const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const BlogPost = require("../models/BlogPost");

describe("App controller", () => {
  it("should update a certain blogpost on PUT request to /api/blogposts/:id", done => {
    const blogpost4 = new BlogPost({
      author: "Topotun",
      title: "UPDATE",
      body: "PUT request to /api/blogposts/:id."
    });

    blogpost4.save().then(() => {
      request(app)
        .put(`/api/blogposts/${blogpost4._id}`)
        .send({
          author: "Blabadun"
        })
        .expect(200)
        .end((err, res) => {
          BlogPost.findOne({ _id: blogpost4._id }).then(foundBlogpost => {
            assert(foundBlogpost.author === "Blabadun");
            done();
          });
        });
    });
  });
});
