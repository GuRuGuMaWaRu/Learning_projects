const GET_CAFE = "GET_CAFE";
const GET_CAFE_SUCCESS = "GET_CAFE_SUCCESS";
const GET_CAFE_FAILURE = "GET_CAFE_FAILURE";

const getCafe = (id, history) => ({
  type: GET_CAFE,
  id,
  history
});

const getCafeSuccess = cafe => ({
  type: GET_CAFE_SUCCESS,
  cafe
});

const getCafeFailure = () => ({
  type: GET_CAFE_FAILURE
});

export default {
  GET_CAFE,
  GET_CAFE_SUCCESS,
  GET_CAFE_FAILURE,
  getCafe,
  getCafeSuccess,
  getCafeFailure
};
