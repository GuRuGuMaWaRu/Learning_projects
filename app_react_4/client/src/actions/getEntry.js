const GET_ENTRY = "GET_ENTRY";
const GET_ENTRY_SUCCESS = "GET_ENTRY_SUCCESS";
const GET_ENTRY_FAILURE = "GET_ENTRY_FAILURE";

const getEntry = (id, history) => ({
  type: GET_ENTRY,
  id,
  history
});

const getEntrySuccess = entry => ({
  type: GET_ENTRY_SUCCESS,
  entry
});

const getEntryFailure = () => ({
  type: GET_ENTRY_FAILURE
});

export default {
  GET_ENTRY,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILURE,
  getEntry,
  getEntrySuccess,
  getEntryFailure
};
