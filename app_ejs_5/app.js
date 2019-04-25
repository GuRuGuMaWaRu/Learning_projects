const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const lowerCase = require("lodash.lowercase");
const { Item, List } = require(__dirname + "/models.js");

const app = express();

//:: Set up DB
mongoose.set("useFindAndModify", false);
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

app.get("/edit/:itemId/:listId", async (req, res) => {
  const { itemId, listId } = req.params;
  const lists = await List.find();
  const currentList = await List.findOne({ _id: listId });

  res.render("list", { list: currentList, editId: itemId, lists: lists });
});

app.post("/update/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  const { listId, item } = req.body;
  const lists = await List.find();

  const updatedList = await List.findOneAndUpdate(
    { _id: listId, "items._id": itemId },
    { $set: { "items.$.name": item } },
    { new: true }
  );

  res.render("list", { list: updatedList, editId: null, lists: lists });
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

app.get("/deleteList/:listId", async (req, res) => {
  const listId = req.params.listId;

  await List.findOneAndDelete({ _id: listId });

  res.redirect("/");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
