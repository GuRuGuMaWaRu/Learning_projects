const assert = require("assert");
const request = require("supertest");
const BlogPost = require("../models/BlogPost");
const app = require("../app");

describe("Blogpost controller", () => {
  it("should add one (1) like on GET request to /api/blogposts/like", done => {
    const blogpost = new BlogPost({
      author: "Superblogger",
      title: "GET",
      body: "GET request to /api/blogposts/like"
    });

    blogpost.save().then(() => {
      BlogPost.findById(blogpost._id).then(createdBlogpost => {
        console.log(createdBlogpost);
        request(app)
          .put(`/api/blogposts/like/${blogpost._id}`)
          .expect(200)
          .end((err, res) => {
            console.log("wow!");
            BlogPost.findById(blogpost._id).then(updatedBlogpost => {
              console.log(updatedBlogpost);
              assert(createdBlogpost.likes === updatedBlogpost.likes + 1);
              done();
            });
          });
      });
    });
  });
});
