const {
  saveShop,
  updateShop,
  getShopNames,
  selectShop,
  deleteShop
} = require("../controllers/shopController");
const { addToCart, getCartItems } = require("../controllers/cartController");

module.exports = app => {
  app.post("/api/shop/save", saveShop);
  app.post("/api/shop/update", updateShop);
  app.get("/api/shop/getNames", getShopNames);
  app.get("/api/shop/select/:id", selectShop);
  app.get("/api/shop/delete/:shopId", deleteShop);
  app.post("/api/cart/add", addToCart);
  app.get("/api/cart/get", getCartItems);
};
