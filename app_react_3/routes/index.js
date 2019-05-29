const {
  saveShop,
  getShopNames,
  selectShop,
  deleteShop
} = require("../controllers/shopController");

module.exports = app => {
  app.post("/api/shop/save", saveShop);
  app.get("/api/shop/getNames", getShopNames);
  app.get("/api/shop/select/:id", selectShop);
  app.get("/api/shop/delete/:shopId", deleteShop);
};
