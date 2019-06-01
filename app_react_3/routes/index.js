const {
  saveShop,
  updateShop,
  getShopNames,
  selectShop,
  deleteShop
} = require("../controllers/shopController");

module.exports = app => {
  app.post("/api/shop/save", saveShop);
  app.post("/api/shop/update", updateShop);
  app.get("/api/shop/getNames", getShopNames);
  app.get("/api/shop/select/:id", selectShop);
  app.get("/api/shop/delete/:shopId", deleteShop);
};
