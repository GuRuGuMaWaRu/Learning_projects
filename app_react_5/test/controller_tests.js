const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Cafe = mongoose.model("cafe");

describe("Cafe controller", () => {
  it("should create a new cafe on POST request to /api/cafes", done => {
    request(app)
      .post("/api/cafes")
      .send({ title: "Cafe 1", description: "POST request" })
      .expect(200)
      .end(() => {
        Cafe.findOne({ title: "Cafe 1" }).then(cafe => {
          assert(cafe.title === "Cafe 1");
          done();
        });
      });
  });

  it("should return all cafes on GET request to /api/cafes", done => {
    Cafe.countDocuments().then(count => {
      Cafe.create({
        title: "Cafe 2",
        description: "GET request INDEX"
      }).then(() => {
        request(app)
          .get("/api/cafes")
          .expect(200)
          .end((err, res) => {
            Cafe.countDocuments().then(newCount => {
              assert(newCount === count + 1);
              done();
            });
          });
      });
    });
  });

  it("should return the required cafe on GET request to /api/cafes/:id", done => {
    Cafe.create({ title: "Cafe 3", description: "GET request" }).then(
      newCafe => {
        request(app)
          .get(`/api/cafes/${newCafe._id}`)
          .expect(200)
          .end((err, res) => {
            assert(res.body.title === "Cafe 3");
            assert(res.body.description === "GET request");
            done();
          });
      }
    );
  });

  it("should update the required cafe on PUT request to /api/cafes/:id", done => {
    Cafe.create({ title: "Cafe 4", description: "PUT request" }).then(
      newCafe => {
        request(app)
          .put(`/api/cafes`)
          .send({ id: newCafe._id, title: "Cafe 44" })
          .expect(200)
          .end((err, res) => {
            assert(res.body.title === "Cafe 44");
            done();
          });
      }
    );
  });

  it("should delete the required cafe on DELETE request to /api/cafes/:id", done => {
    Cafe.create({ title: "Cafe 5", description: "DELETE request" }).then(
      newCafe => {
        Cafe.countDocuments().then(count => {
          request(app)
            .delete(`/api/cafes/${newCafe._id}`)
            .expect(200)
            .end((err, res) => {
              Cafe.countDocuments().then(newCount => {
                assert(newCount === count - 1);
                done();
              });
            });
        });
      }
    );

    done();
  });
});
