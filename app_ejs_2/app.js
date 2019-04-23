const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const uuidv4 = require("uuid/v4");

const getDate = require(__dirname + "/date.js");

const app = express();

// start database
mongoose.connect("mongodb://localhost/PostsDB", { useNewUrlParser: true });

// get Posts Model
const Post = require(__dirname + "/PostModel.js");

let posts = [];

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const posts = await Post.find();

  res.render("home", { posts: posts });
});

app.get("/compose", (req, res) => {
  const date = getDate();

  res.render("compose", { date: date });
});

app.post("/compose", (req, res) => {
  const data = req.body;
  const post = new Post({
    date: data.date,
    title: data.title,
    body: data.body
  });

  post.save();

  res.redirect("/");
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Post.findOne({ _id: id });

  res.render("post", { post: post });
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Post.deleteOne({ _id: id });

  res.redirect("/");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
