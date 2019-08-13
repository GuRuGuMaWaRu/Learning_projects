const DELETE_BLOGPOST_ACTION = "DELETE_BLOGPOST_ACTION";
const DELETE_BLOGPOST_ACTION_SUCCESS = "DELETE_BLOGPOST_ACTION_SUCCESS";
const DELETE_BLOGPOST_ACTION_FAILURE = "DELETE_BLOGPOST_ACTION_FAILURE";

const deleteBlogpostAction = (id, history) => ({
  type: DELETE_BLOGPOST_ACTION,
  id,
  history
});

const deleteBlogpostActionSuccess = () => ({
  type: DELETE_BLOGPOST_ACTION_SUCCESS
});

const deleteBlogpostActionFailure = () => ({
  type: DELETE_BLOGPOST_ACTION_FAILURE
});

export default {
  DELETE_BLOGPOST_ACTION,
  DELETE_BLOGPOST_ACTION_SUCCESS,
  DELETE_BLOGPOST_ACTION_FAILURE,
  deleteBlogpostAction,
  deleteBlogpostActionSuccess,
  deleteBlogpostActionFailure
};
