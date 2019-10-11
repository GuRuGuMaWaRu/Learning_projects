const assert = require("assert");
const request = require("supertest");
const app = require("../server/app");
const Picture = require("../server/models/picture");

describe("Picture controller", () => {
  it("should save an image to a database on POST request to /pictures", done => {
    Picture.countDocuments()
      .then(count => {
        request(app)
          .post("/pictures")
          .send({ path: "/images/image.png" })
          .expect(201)
          .end((err, res) => {
            Picture.countDocuments()
              .then(newCount => {
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
