const GET_BLOGPOSTS = "GET_BLOGPOSTS";
const GET_BLOGPOSTS_SUCCESS = "GET_BLOGPOSTS_SUCCESS";
const GET_BLOGPOSTS_FAILURE = "GET_BLOGPOSTS_FAILURE";

const getBlogposts = () => ({
  type: GET_BLOGPOSTS
});

const getBlogpostsSuccess = blogposts => ({
  type: GET_BLOGPOSTS_SUCCESS,
  blogposts
});

const getBlogpostsFailure = () => ({
  type: GET_BLOGPOSTS_FAILURE
});

export default {
  GET_BLOGPOSTS,
  GET_BLOGPOSTS_SUCCESS,
  GET_BLOGPOSTS_FAILURE,
  getBlogposts,
  getBlogpostsSuccess,
  getBlogpostsFailure
};
