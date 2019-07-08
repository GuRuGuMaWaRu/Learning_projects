const UPDATE_CAFE = "UPDATE_CAFE";
const UPDATE_CAFE_SUCCESS = "UPDATE_CAFE_SUCCESS";
const UPDATE_CAFE_FAILURE = "UPDATE_CAFE_FAILURE";

const updateCafe = (data, history) => ({
  type: UPDATE_CAFE,
  data,
  history
});

const updateCafeSuccess = () => ({
  type: UPDATE_CAFE_SUCCESS
});

const updateCafeFailure = () => ({
  type: UPDATE_CAFE_FAILURE
});

export default {
  UPDATE_CAFE,
  UPDATE_CAFE_SUCCESS,
  UPDATE_CAFE_FAILURE,
  updateCafe,
  updateCafeSuccess,
  updateCafeFailure
};
