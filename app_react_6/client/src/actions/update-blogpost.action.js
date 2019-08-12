const UPDATE_BLOGPOST = "UPDATE_BLOGPOST";
const UPDATE_BLOGPOST_SUCCESS = "UPDATE_BLOGPOST_SUCCESS";
const UPDATE_BLOGPOST_FAILURE = "UPDATE_BLOGPOST_FAILURE";

const updateBlogpost = data => ({
  type: UPDATE_BLOGPOST,
  data
});

const updateBlogpostSuccess = updatedBlogpost => ({
  type: UPDATE_BLOGPOST_SUCCESS,
  updatedBlogpost
});

const updateBlogpostFailure = () => ({
  type: UPDATE_BLOGPOST_FAILURE
});

export default {
  UPDATE_BLOGPOST,
  UPDATE_BLOGPOST_SUCCESS,
  UPDATE_BLOGPOST_FAILURE,
  updateBlogpost,
  updateBlogpostSuccess,
  updateBlogpostFailure
};
