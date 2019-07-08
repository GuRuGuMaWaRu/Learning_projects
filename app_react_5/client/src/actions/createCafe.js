const CREATE_CAFE = "CREATE_CAFE";
const CREATE_CAFE_SUCCESS = "CREATE_CAFE_SUCCESS";
const CREATE_CAFE_FAILURE = "CREATE_CAFE_FAILURE";

const createCafe = data => ({
  type: CREATE_CAFE,
  data
});

const createCafeSuccess = () => ({
  type: CREATE_CAFE_SUCCESS
});

const createCafeFailure = () => ({
  type: CREATE_CAFE_FAILURE
});

export default {
  CREATE_CAFE,
  CREATE_CAFE_SUCCESS,
  CREATE_CAFE_FAILURE,
  createCafe,
  createCafeSuccess,
  createCafeFailure
};
