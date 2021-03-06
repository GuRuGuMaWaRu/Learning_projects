const {
  saveShop,
  updateShop,
  getShopNames,
  selectShop,
  deleteShop
} = require("../controllers/shopController");
const {
  addToCart,
  getCartItems,
  changeCartItemQty,
  deleteCartItem,
  clearCart
} = require("../controllers/cartController");

module.exports = app => {
  app.post("/api/shop/save", saveShop);
  app.post("/api/shop/update", updateShop);
  app.get("/api/shop/getNames", getShopNames);
  app.get("/api/shop/select/:id", selectShop);
  app.get("/api/shop/delete/:shopId", deleteShop);
  app.post("/api/cart/add", addToCart);
  app.get("/api/cart/get", getCartItems);
  app.post("/api/cart/changeQty", changeCartItemQty);
  app.post("/api/cart/deleteItem", deleteCartItem);
  app.get("/api/cart/clear", clearCart);
};
