const UPDATE_BLOGPOST = "UPDATE_BLOGPOST";
const UPDATE_BLOGPOST_SUCCESS = "UPDATE_BLOGPOST_SUCCESS";
const UPDATE_BLOGPOST_FAILURE = "UPDATE_BLOGPOST_FAILURE";

const updateBlogpost = (id, data, history) => ({
  type: UPDATE_BLOGPOST,
  id,
  data,
  history
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
