const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Cafe = mongoose.model("cafe");

describe("Cafe controller", () => {
  it("POST request to /api/cafes creates a new cafe", done => {});
  it("GET request to /api/cafes loads all existing cafes", done => {});
  it("GET request to /api/cafes/:id loads a particular cafe", done => {});
  it("PUT request to /api/cafes/:id updates a particular cafe", done => {});
  it("DELETE request to /api/cafes/:id deletes a particular cafe", done => {});
});
