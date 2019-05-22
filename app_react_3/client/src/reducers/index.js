import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import shopNamesReducer from "./shopNames";

export default history =>
  combineReducers({
    router: connectRouter(history),
    shopNames: shopNamesReducer
  });
