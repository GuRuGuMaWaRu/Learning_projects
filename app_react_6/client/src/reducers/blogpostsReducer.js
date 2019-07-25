import { indexAction } from "../actions";

const INITIAL_STATE = [];

const blogpostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case indexAction.GET_BLOGPOSTS_SUCCESS:
      return action.blogposts;
    default:
      return state;
  }
};

export default blogpostsReducer;
