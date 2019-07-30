const assert = require("assert");
const request = require("supertest");
const app = require("../app");
const BlogPost = require("../models/BlogPost");

describe("Comment controller", () => {
  it("should add a comment to existing blogpost on POST request to /api/blogposts/comment", done => {
    const blogpost6 = new BlogPost({
      author: "Troubadur",
      title: "CREATE",
      body: "POST request to /api/blogposts/comment."
    });

    const comment = {
      author: "Commentator",
      text: "I am the first to comment!"
    };

    blogpost6.save().then(() => {
      request(app)
        .post("/api/blogposts/comment")
        .send(comment)
        .expect(200)
        .end((err, res) => {
          BlogPost.findById(blogpost6._id).then(blogpost => {
            assert(blogpost.comments[0].author === "Commentator");
            done();
          });
        });
    });
  });
});
