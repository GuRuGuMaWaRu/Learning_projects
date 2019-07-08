const DELETE_CAFE = "DELETE_CAFE";
const DELETE_CAFE_SUCCESS = "DELETE_CAFE_SUCCESS";
const DELETE_CAFE_FAILURE = "DELETE_CAFE_FAILURE";

const deleteCafe = id => ({
  type: DELETE_CAFE,
  id
});

const deleteCafeSuccess = () => ({
  type: DELETE_CAFE_SUCCESS
});

const deleteCafeFailure = () => ({
  type: DELETE_CAFE_FAILURE
});

export default {
  DELETE_CAFE,
  DELETE_CAFE_SUCCESS,
  DELETE_CAFE_FAILURE,
  deleteCafe,
  deleteCafeSuccess,
  deleteCafeFailure
};
