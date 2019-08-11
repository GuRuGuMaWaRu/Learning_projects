const LIKE_COMMENT = "LIKE_COMMENT";
const LIKE_COMMENT_SUCCESS = "LIKE_COMMENT_SUCCESS";
const LIKE_COMMENT_FAILURE = "LIKE_COMMENT_FAILURE";

const likeComment = (blogpostId, commentId) => ({
  type: LIKE_COMMENT,
  blogpostId,
  commentId
});

const likeCommentSuccess = updatedBlogpost => ({
  type: LIKE_COMMENT_SUCCESS,
  updatedBlogpost
});

const likeCommentFailure = () => ({
  type: LIKE_COMMENT_FAILURE
});

export default {
  LIKE_COMMENT,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  likeComment,
  likeCommentSuccess,
  likeCommentFailure
};
