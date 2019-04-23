const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const uuidv4 = require("uuid/v4");

const getCurrentDate = require(__dirname + "/date.js");

const app = express();

let posts = [];

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home", { posts: posts });
});

app.get("/compose", (req, res) => {
  const date = getCurrentDate();

  res.render("compose", { date: date });
});

app.post("/compose", (req, res) => {
  const post = req.body;

  posts.push({ ...post, id: uuidv4() });

  res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;

  const post = posts.filter(post => post.id === id)[0];

  res.render("post", { post: post });
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;

  posts = posts.filter(post => post.id !== id);

  res.redirect("/");
});

app.get("/posts/delete/:id", (req, res) => {
  const id = req.params.id;

  res.redirect(`/delete/${id}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
