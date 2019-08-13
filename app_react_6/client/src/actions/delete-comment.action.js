const DELETE_COMMENT_ACTION = "DELETE_COMMENT_ACTION";
const DELETE_COMMENT_ACTION_SUCCESS = "DELETE_COMMENT_ACTION_SUCCESS";
const DELETE_COMMENT_ACTION_FAILURE = "DELETE_COMMENT_ACTION_FAILURE";

const deleteCommentAction = (id, history) => ({
  type: DELETE_COMMENT_ACTION,
  id,
  history
});

const deleteCommentActionSuccess = () => ({
  type: DELETE_COMMENT_ACTION_SUCCESS
});

const deleteCommentActionFailure = () => ({
  type: DELETE_COMMENT_ACTION_FAILURE
});

export default {
  DELETE_COMMENT_ACTION,
  DELETE_COMMENT_ACTION_SUCCESS,
  DELETE_COMMENT_ACTION_FAILURE,
  deleteCommentAction,
  deleteCommentActionSuccess,
  deleteCommentActionFailure
};
