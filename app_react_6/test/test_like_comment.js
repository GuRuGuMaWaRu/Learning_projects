const assert = require("assert");
const request = require("supertest");
const BlogPost = require("../models/BlogPost");
const app = require("../app");

describe("Comment controller", () => {
  it("should return a commment with 1 more like on PUT request to /api/blogposts/comment/:id", done => {
    const blogpost = new BlogPost({
      author: "Bobin",
      title: "Like comment",
      body: "PUT request to /api/blogposts/comment/:id",
      comments: [
        {
          author: "Commentator",
          text: "First!"
        }
      ]
    });

    blogpost.save().then(() => {
      request(app)
        .put(`/api/blogposts/${blogpost._id}/comment/${blogpost._id}`)
        .expect(200)
        .end((err, res) => {
          assert(res.body.comments[0].likes === blogpost.comments[0].likes + 1);
          done();
        });
    });
  });
});
