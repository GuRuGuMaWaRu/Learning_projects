const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const lowerCase = require("lodash.lowercase");
const { Item, List } = require(__dirname + "/models.js");

const app = express();

//:: Set up DB
mongoose.connect(
  "mongodb+srv://GuRuGu:i44iYtewBM21noYb@cluster0-z8edg.mongodb.net/app_ejs_5",
  {
    useNewUrlParser: true
  }
);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const lists = await List.find();

  res.render("home", { lists: lists });
});

app.get("/:listId", async (req, res) => {
  const listId = req.params.listId;
  const lists = await List.find();

  await List.findOne({ _id: listId }, (err, list) => {
    if (!err) res.render("list", { list: list, editId: null, lists: lists });
  });
});

app.post("/addItem", async (req, res) => {
  const { currentList, createdItem } = req.body;
  const newItem = new Item({ name: createdItem });

  await List.findOneAndUpdate(
    { _id: currentList },
    { $push: { items: newItem } }
  );

  res.redirect(`/${currentList}`);
});

app.get("/delete/:itemId/:listId", async (req, res) => {
  const { itemId, listId } = req.params;

  await List.findOneAndUpdate(
    { _id: listId },
    { $pull: { items: { _id: itemId } } }
  );

  res.redirect(`/${listId}`);
});

app.get("/edit/:id/:list", async (req, res) => {
  const { id, list } = req.params;

  await List.findOne({ name: list }, (err, foundList) => {
    if (!err) {
      res.render("main", {
        list: foundList,
        editId: id
      });
    }
  });
});

app.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { list, item } = req.body;

  await List.findOneAndUpdate(
    { name: list, "items._id": id },
    { $set: { "items.$.name": item } }
  );

  res.redirect("/");
});

app.post("/done/:id", async (req, res) => {
  const id = req.params.id;
  const { list, done } = req.body;

  await List.findOneAndUpdate(
    { name: list, "items._id": id },
    { $set: { "items.$.finished": done ? true : false } }
  );

  res.redirect("/");
});

app.post("/addList", async (req, res) => {
  const list = req.body.list;

  const newList = await List.create({
    name: list.slice(0, 1).toUpperCase() + lowerCase(list.slice(1)),
    items: []
  });

  res.redirect(`/${newList._id}`);
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
