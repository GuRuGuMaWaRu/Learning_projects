import {
  getBlogpostAction,
  createCommentAction,
  clearBlogpostAction,
  likeBlogpostAction,
  likeCommentAction
} from "../actions";

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
    case getBlogpostAction.GET_BLOGPOST_SUCCESS:
      return action.blogpost;
    case likeBlogpostAction.LIKE_BLOGPOST_SUCCESS:
    case likeCommentAction.LIKE_COMMENT_SUCCESS:
    case createCommentAction.CREATE_COMMENT_SUCCESS:
      return action.updatedBlogpost;
    case clearBlogpostAction.CLEAR_BLOGPOST:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default blogpostReducer;
