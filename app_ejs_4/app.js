const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const getCurrentDate = require(`${__dirname}/date.js`);
const Rating = require(`${__dirname}/RatingModel.js`);

const app = express();
mongoose.connect("mongodb://localhost:27017/app_ejs_4", {
  useNewUrlParser: true
});

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const ratings = await Rating.find();

  res.render("ratings", { ratings: ratings });
});

app.get("/add", (req, res) => {
  const date = getCurrentDate();
  res.render("addRating", { date: date });
});

app.post("/add", async (req, res) => {
  const currentDate = getCurrentDate();
  const formData = req.body;
  const newRating = new Rating({ date: currentDate, ...formData });

  await newRating.save(err => {
    if (err) {
      console.log(err);
    }
  });

  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Rating.deleteOne({ _id: id }, err => {
    if (err) {
      console.log(err);
    }
  });

  res.redirect("/");
});

app.get("/rating/:id", async (req, res) => {
  const id = req.params.id;
  const rating = await Rating.findById(id);

  res.render("rating", { rating: rating });
});

app.post("/rating/:id", async (req, res) => {
  const currentDate = getCurrentDate();
  const id = req.params.id;
  const updatedRating = req.body;

  await Rating.updateOne(
    { _id: id },
    { ...updatedRating, date: currentDate },
    err => {
      if (err) {
        console.log(err);
      }
    }
  );

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
