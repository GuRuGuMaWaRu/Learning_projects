const GET_CAFES = "GET_CAFES";
const GET_CAFES_SUCCESS = "GET_CAFES_SUCCESS";
const GET_CAFES_FAILURE = "GET_CAFES_FAILURE";

const getCafes = () => ({
  type: GET_CAFES
});

const getCafesSuccess = cafes => ({
  type: GET_CAFES_SUCCESS,
  cafes
});

const getCafesFailure = () => ({
  type: GET_CAFES_FAILURE
});

export default {
  GET_CAFES,
  GET_CAFES_SUCCESS,
  GET_CAFES_FAILURE,
  getCafes,
  getCafesSuccess,
  getCafesFailure
};
