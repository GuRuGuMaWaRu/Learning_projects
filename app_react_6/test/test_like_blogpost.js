const assert = require("assert");
const request = require("supertest");
const BlogPost = require("../models/BlogPost");
const app = require("../app");

describe("Blogpost controller", () => {
  it("should return a blogpost with 1 more like on PUT request to /api/blogposts/like/:id", done => {
    const blogpost = new BlogPost({
      author: "Superblogger",
      title: "PUT",
      body: "PUT request to /api/blogposts/like"
    });

    blogpost.save().then(() => {
      BlogPost.findById(blogpost._id).then(createdBlogpost => {
        request(app)
          .put(`/api/blogposts/like/${blogpost._id}`)
          .expect(200)
          .end((err, res) => {
            assert(res.body.likes === createdBlogpost.likes + 1);
            done();
          });
      });
    });
  });
});
