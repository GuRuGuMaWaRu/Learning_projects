import { combineReducers } from "redux";
import blogpostReducer from "./blogpostReducer";
import blogpostsReducer from "./blogpostsReducer";

const rootReducer = combineReducers({
  blogposts: blogpostsReducer,
  blogpost: blogpostReducer
});

export default rootReducer;
