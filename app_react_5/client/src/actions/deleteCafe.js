const DELETE_CAFE = "DELETE_CAFE";
const DELETE_CAFE_SUCCESS = "DELETE_CAFE_SUCCESS";
const DELETE_CAFE_FAILURE = "DELETE_CAFE_FAILURE";

const deleteCafe = (id, isCafePage, history) => ({
  type: DELETE_CAFE,
  id,
  isCafePage,
  history
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
