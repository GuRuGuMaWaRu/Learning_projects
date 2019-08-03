const CREATE_COMMENT = "CREATE_COMMENT";
const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE";

const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

const createCommentSuccess = () => ({
  type: CREATE_COMMENT_SUCCESS
});

const createCommentFailure = () => ({
  type: CREATE_COMMENT_FAILURE
});

module.exports = {
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  createComment,
  createCommentSuccess,
  createCommentFailure
};
