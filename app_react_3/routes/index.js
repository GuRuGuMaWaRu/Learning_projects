const {
  saveShop,
  getShopNames,
  selectShop
} = require("../controllers/shopController");

module.exports = app => {
  app.post("/api/shop/save", saveShop);
  app.get("/api/shop/getNames", getShopNames);
  app.get("/api/shop/select/:id", selectShop);
};
