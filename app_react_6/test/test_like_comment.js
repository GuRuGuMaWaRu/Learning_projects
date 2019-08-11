const assert = require("assert");
const request = require("supertest");
const BlogPost = require("../models/BlogPost");
const app = require("../app");

describe("Comment controller", () => {
  it("should return a commment with 1 more like on PUT request to /api/blogposts/:blogpostId/comment/:commentId", done => {
    const blogpost = new BlogPost({
      author: "Bobin",
      title: "Like comment",
      body: "PUT request to /api/blogposts/:blogpostId/comment/:commentId",
      comments: [
        {
          author: "Commentator",
          text: "First!"
        }
      ]
    });

    blogpost.save().then(savedBlogpost => {
      request(app)
        .put(
          `/api/blogposts/${blogpost._id}/comment/${blogpost.comments[0]._id}`
        )
        .expect(200)
        .end((err, res) => {
          assert(res.body.comments[0].likes === blogpost.comments[0].likes + 1);
          done();
        });
    });
  });
});
