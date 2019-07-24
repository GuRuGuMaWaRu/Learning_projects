import { combineReducers } from "redux";
import { blogpostReducer } from "./";
import { blogpostsReducer } from "./";

export default combineReducers({
  blogposts: blogpostsReducer,
  blogpost: blogpostReducer
});
