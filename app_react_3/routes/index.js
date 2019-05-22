const { saveShop, getShopNames } = require("../controllers/shopController");

module.exports = app => {
  app.post("/api/shop/save", saveShop);
  app.get("/api/shop/getNames", getShopNames);
};
