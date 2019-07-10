import { combineReducers } from "redux";
import cafeReducer from "./cafeReducers";

export default combineReducers({
  cafes: cafeReducer
});
