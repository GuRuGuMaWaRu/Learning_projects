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

  await List.findOne({ name: "Home" }, async (err, homeList) => {
    if (err) {
      console.log(err);
    } else {
      if (!homeList) {
        // populate default to-do list on first load
        const item1 = new Item({ name: "This is an example to-do list." });
        const item2 = new Item({ name: "You can mark items as finished." });
        const item3 = new Item({ name: "And you can also delete items." });
        const home = new List({ name: "Home", items: [item1, item2, item3] });

        await home.save();
        res.redirect("/");
      } else {
        res.render("main", { list: homeList, editId: null, lists: lists });
      }
    }
  });
});

app.get("/:listId", async (req, res) => {
  const listId = req.params.listId;
  const lists = await List.find();

  await List.findOne({ _id: listId }, (err, list) => {
    if (err) {
      console.log(err);
    } else {
      res.render("main", { list: list, editId: null, lists: lists });
    }
  });
});

app.post("/addItem", async (req, res) => {
  const data = req.body;
  const item = new Item({ name: data.item });

  await List.findOneAndUpdate({ name: data.list }, { $push: { items: item } });

  res.redirect(data.list === "Home" ? "/" : `/${data.list}`);
});

app.get("/delete/:id/:list", async (req, res) => {
  const { id, list } = req.params;

  await List.findOneAndUpdate(
    { name: list },
    { $pull: { items: { _id: id } } }
  );

  res.redirect(list === "Home" ? "/" : `/${list}`);
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
    { $set: { "items.$.name": item } },
    err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    }
  );
});

app.post("/done/:id", async (req, res) => {
  const id = req.params.id;
  const { list, done } = req.body;

  await List.findOneAndUpdate(
    { name: list, "items._id": id },
    { $set: { "items.$.finished": done ? true : false } },
    err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    }
  );
});

app.post("/addList", async (req, res) => {
  const list = req.body.list;

  await List.create(
    {
      name: list.slice(0, 1).toUpperCase() + lowerCase(list.slice(1)),
      items: []
    },
    err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    }
  );
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
