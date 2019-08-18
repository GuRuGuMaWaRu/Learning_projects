const LIKE_BLOGPOST = "LIKE_BLOGPOST";
const LIKE_BLOGPOST_SUCCESS = "LIKE_BLOGPOST_SUCCESS";
const LIKE_BLOGPOST_FAILURE = "LIKE_BLOGPOST_FAILURE";

const likeBlogpost = id => ({
  type: LIKE_BLOGPOST,
  id
});

const likeBlogpostSuccess = updatedBlogpost => ({
  type: LIKE_BLOGPOST_SUCCESS,
  updatedBlogpost
});

const likeBlogpostFailure = () => ({
  type: LIKE_BLOGPOST_FAILURE
});

export default {
  LIKE_BLOGPOST,
  LIKE_BLOGPOST_SUCCESS,
  LIKE_BLOGPOST_FAILURE,
  likeBlogpost,
  likeBlogpostSuccess,
  likeBlogpostFailure
};
