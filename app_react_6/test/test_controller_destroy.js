const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const BlogPost = require("../models/BlogPost");

describe("App controller", () => {
  it("should delete a particular blogpost on DELETE request to /api/blogposts/:id", done => {
    const blogpost5 = new BlogPost({
      author: "Damdir",
      title: "DESTROY",
      body: "DELETE request to /api/blogposts/:id."
    });

    blogpost5.save().then(() => {
      request(app)
        .delete(`/api/blogposts/${blogpost5._id}`)
        .expect(200)
        .end((err, res) => {
          BlogPost.findById(blogpost5._id).then(foundBlogpost => {
            console.log(foundBlogpost);
            assert(foundBlogpost === null);
            done();
          });
        });
    });
  });
});
