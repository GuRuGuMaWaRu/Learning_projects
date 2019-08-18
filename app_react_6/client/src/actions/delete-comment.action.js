const DELETE_COMMENT = "DELETE_COMMENT";
const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

const deleteComment = ({ blogpostId, commentId }) => ({
  type: DELETE_COMMENT,
  blogpostId,
  commentId
});

const deleteCommentSuccess = updatedBlogpost => ({
  type: DELETE_COMMENT_SUCCESS,
  updatedBlogpost
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
