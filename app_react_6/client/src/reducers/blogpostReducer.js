import { getAction, createCommentAction } from "../actions";

const INITIAL_STATE = {
  author: "",
  title: "",
  body: "",
  comments: [],
  likes: 0,
  date: ""
};

const blogpostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getAction.GET_BLOGPOST_SUCCESS:
      return action.blogpost;
    case createCommentAction.CREATE_COMMENT_SUCCESS:
      return action.updatedBlogpost;
    default:
      return state;
  }
};

export default blogpostReducer;
