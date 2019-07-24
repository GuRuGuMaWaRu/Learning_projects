export const CREATE_BLOGPOST = "CREATE_BLOGPOST";
export const CREATE_BLOGPOST_SUCCESS = "CREATE_BLOGPOST_SUCCESS";
export const CREATE_BLOGPOST_FAILURE = "CREATE_BLOGPOST_FAILURE";

export const createBlogpost = blogpost => ({
  type: CREATE_BLOGPOST,
  blogpost
});

export const createBlogpostSuccess = () => ({
  type: CREATE_BLOGPOST_SUCCESS
});

export const createBlogpostFailure = () => ({
  type: CREATE_BLOGPOST_FAILURE
});