import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import shopNamesReducer from "./shopNames";
import selectedShopReducer from "./selectedShop";

export default history =>
  combineReducers({
    router: connectRouter(history),
    shopNames: shopNamesReducer,
    selectedShop: selectedShopReducer
  });
