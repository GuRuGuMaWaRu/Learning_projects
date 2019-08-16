const DELETE_COMMENT = "DELETE_COMMENT";
const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

const deleteComment = (id, history) => ({
  type: DELETE_COMMENT,
  id,
  history
});

const deleteCommentSuccess = () => ({
  type: DELETE_COMMENT_SUCCESS
});

const deleteCommentFailure = () => ({
  type: DELETE_COMMENT_FAILURE
});

export default {
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  deleteComment,
  deleteCommentSuccess,
  deleteCommentFailure
};
