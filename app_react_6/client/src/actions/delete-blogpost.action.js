const DELETE_BLOGPOST = "DELETE_BLOGPOST";
const DELETE_BLOGPOST_SUCCESS = "DELETE_BLOGPOST_SUCCESS";
const DELETE_BLOGPOST_FAILURE = "DELETE_BLOGPOST_FAILURE";

const deleteBlogpost = (id, history) => ({
  type: DELETE_BLOGPOST,
  id,
  history
});

const deleteBlogpostSuccess = id => ({
  type: DELETE_BLOGPOST_SUCCESS,
  id
});

const deleteBlogpostFailure = () => ({
  type: DELETE_BLOGPOST_FAILURE
});

export default {
  DELETE_BLOGPOST,
  DELETE_BLOGPOST_SUCCESS,
  DELETE_BLOGPOST_FAILURE,
  deleteBlogpost,
  deleteBlogpostSuccess,
  deleteBlogpostFailure
};
