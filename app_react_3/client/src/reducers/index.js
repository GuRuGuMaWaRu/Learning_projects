import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import shopNamesReducer from "./shopNames";
import selectedShopReducer from "./selectedShop";
import cartReducer from "./cart";
import currencyReducer from "./currency";

export default history =>
  combineReducers({
    router: connectRouter(history),
    shopNames: shopNamesReducer,
    selectedShop: selectedShopReducer,
    cart: cartReducer,
    currency: currencyReducer
  });
