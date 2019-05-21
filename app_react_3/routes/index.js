const Shop = require("../models/Shop");

module.exports = app => {
  app.get("/api/shopping", (req, res) => {
    res.send("Shopping!");
  });
  app.post("/api/shop/save", async (req, res) => {
    const shopData = req.body;
    await Shop.create(shopData);
    res.send();
  });
};
