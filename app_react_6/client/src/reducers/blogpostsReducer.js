import { getAllBlogpostsAction } from "../actions";

const INITIAL_STATE = [];

const blogpostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getAllBlogpostsAction.GET_BLOGPOSTS_SUCCESS:
      return action.blogposts;
    default:
      return state;
  }
};

export default blogpostsReducer;
