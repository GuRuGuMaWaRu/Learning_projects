const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Cafe = mongoose.model("cafe");

describe("Cafe controller", () => {
  it("POST request to /api/cafes creates a new cafe", done => {
    request(app)
      .post("/api/cafes")
      .send({ title: "Cafe 1", description: "POST request" })
      .end(() => {
        Cafe.find().then(cafes => {
          assert(cafes.length === 1);
          assert(cafes[0].title === "Cafe 1");
          done();
        });
      });
  });
  it("GET request to /api/cafes loads all existing cafes", done => {
    const cafe = new Cafe({
      title: "Cafe 1",
      description: "GET request INDEX"
    });

    cafe.save().then(() => {
      request(app)
        .get("/api/cafes")
        .end((err, response) => {
          assert(response.body.length === 1);
          assert(response.body[0].title === "Cafe 1");
          done();
        });
    });
  });
  it("GET request to /api/cafes/:id loads a particular cafe", done => {
    const cafe2 = new Cafe({ title: "Cafe 2", description: "GET request" });

    cafe2.save().then(() => {
      request(app)
        .get(`/api/cafes/${cafe2._id}`)
        .end((err, response) => {
          assert(response.body.title === "Cafe 2");
          assert(response.body.description === "GET request");
          done();
        });
    });
  });
  xit("PUT request to /api/cafes/:id updates a particular cafe", done => {
    const cafe3 = new Cafe({ title: "Cafe 3", description: "PUT request" });

    cafe3.save().then(() => {
      request(app)
        .put(`/api/cafes/${cafe3._id}`)
        .send({ title: "Cafe 33" })
        .end((err, response) => {
          assert(response.body.title === "Cafe 33");
          done();
        });
    });
    done();
  });
  xit("DELETE request to /api/cafes/:id deletes a particular cafe", done => {
    done();
  });
});
