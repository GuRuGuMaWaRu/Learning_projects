import { getAllBlogpostsAction, deleteBlogpostAction } from "../actions";

const INITIAL_STATE = [];

const blogpostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getAllBlogpostsAction.GET_BLOGPOSTS_SUCCESS:
      return action.blogposts;
    case deleteBlogpostAction.DELETE_BLOGPOST_SUCCESS:
      return state.filter(blogpost => blogpost._id !== action.id);
    default:
      return state;
  }
};

export default blogpostsReducer;
