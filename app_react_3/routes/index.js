const { saveShop } = require("../controllers/shopController");

module.exports = app => {
  app.get("/api/shopping", (req, res) => {
    res.send("Shopping!");
  });
  app.post("/api/shop/save", saveShop);
};
