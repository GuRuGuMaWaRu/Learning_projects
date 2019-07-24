export const CREATE_BLOGPOST = "CREATE_BLOGPOST";
export const CREATE_BLOGPOST_SUCCESS = "CREATE_BLOGPOST_SUCCESS";
export const CREATE_BLOGPOST_FAILURE = "CREATE_BLOGPOST_FAILURE";

export const createBlogpost = (blogpost, history) => ({
  type: CREATE_BLOGPOST,
  blogpost,
  history
});

export const createBlogpostSuccess = () => ({
  type: CREATE_BLOGPOST_SUCCESS
});

export const createBlogpostFailure = () => ({
  type: CREATE_BLOGPOST_FAILURE
});

export default {
  CREATE_BLOGPOST,
  CREATE_BLOGPOST_SUCCESS,
  CREATE_BLOGPOST_FAILURE,
  createBlogpost,
  createBlogpostSuccess,
  createBlogpostFailure
};
