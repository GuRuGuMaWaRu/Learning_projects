const GET_BLOGPOST = "GET_BLOGPOST";
const GET_BLOGPOST_SUCCESS = "GET_BLOGPOST_SUCCESS";
const GET_BLOGPOST_FAILURE = "GET_BLOGPOST_FAILURE";

const getBlogpost = (history, id) => ({
  type: GET_BLOGPOST,
  history,
  id
});

const getBlogpostSuccess = blogpost => ({
  type: GET_BLOGPOST_SUCCESS,
  blogpost
});

const getBlogpostFailure = () => ({
  type: GET_BLOGPOST_FAILURE
});

export default {
  GET_BLOGPOST,
  GET_BLOGPOST_SUCCESS,
  GET_BLOGPOST_FAILURE,
  getBlogpost,
  getBlogpostSuccess,
  getBlogpostFailure
};
