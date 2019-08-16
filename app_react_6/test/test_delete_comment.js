const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const BlogPost = require("../models/BlogPost");

describe("Comment controller", () => {
  it("should delete a comment on DELETE request to /api/blogposts/:blogpostId/comment/:commentId", done => {
    const blogpost = new BlogPost({
      author: "Jorg Deer",
      title: "Hunter Post",
      body: "should delete a comment",
      comments: [
        {
          author: "Varyn",
          text: "You are my hero!"
        }
      ]
    });

    blogpost.save().then(() => {
      request(app)
        .delete(
          `api/blogposts/${blogpost._id}/comment/${blogpost.comments[0]._id}`
        )
        .expect(200)
        .end((err, res) => {
          BlogPost.find({ _id: blogpost._id }).then(foundBlogpost => {
            assert(foundBlogpost.comments.length === 0);
            done();
          });
        });
    });
  });
});
