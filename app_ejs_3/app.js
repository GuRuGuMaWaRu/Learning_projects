const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const getDate = require(`${__dirname}/getDate.js`);
const Order = require(`${__dirname}/OrderModel.js`);

const app = express();

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const orders = await Order.find();
  res.render("home", { orders: orders });
});

app.get("/order", (req, res) => {
  const date = getDate();
  res.render("placeOrder", { date: date });
});

app.post("/order", (req, res) => {
  const order = new Order({ ...req.body });

  order.save(err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Order saved to DB successfully!");
    }
  });

  res.redirect("/");
});

app.get("/orders/:id", async (req, res) => {
  const id = req.params.id;
  const order = await Order.findOne({ _id: id });

  res.render("order", { order: order });
});

app.get("/cancel/:id", async (req, res) => {
  const id = req.params.id;
  const cancelledOrder = await Order.findByIdAndDelete(id);

  res.redirect("/");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
