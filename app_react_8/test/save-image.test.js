const assert = require("assert");
const request = require("supertest");
const app = require("../server/app");
const Picture = require("../server/models/picture");

describe("Picture controller", () => {
  it("should save an image to a database on POST request to /pictures", done => {
    Picture.countDocuments()
      .then(count => {
        console.log("count: ", count);
        request(app)
          .post("/pictures")
          .attach("path", "./test/image.jpg")
          .expect(201)
          .end((err, res) => {
            Picture.countDocuments()
              .then(newCount => {
                console.log("new count: ", newCount);
                assert(newCount === count + 1);
                done();
              })
              .catch(err => {
                console.log("There was an error: ", err);
              });
          });
      })
      .catch(err => {
        console.log("There was an error: ", err);
      });
  });
});
