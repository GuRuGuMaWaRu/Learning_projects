import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import shopFormReducer from "./shopForm";

export default history =>
  combineReducers({
    router: connectRouter(history),
    shopForm: shopFormReducer
  });
