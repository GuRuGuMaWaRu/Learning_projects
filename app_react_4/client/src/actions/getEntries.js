const GET_ENTRIES = "GET_ENTRIES";
const GET_ENTRIES_SUCCESS = "GET_ENTRIES_SUCCESS";
const GET_ENTRIES_FAILURE = "GET_ENTRIES_FAILURE";

const getEntries = () => ({
  type: GET_ENTRIES
});

const getEntriesSuccess = entries => ({
  type: GET_ENTRIES_SUCCESS,
  entries
});

const getEntriesFailure = () => ({
  type: GET_ENTRIES_FAILURE
});

export default {
  GET_ENTRIES,
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_FAILURE,
  getEntries,
  getEntriesSuccess,
  getEntriesFailure
};
