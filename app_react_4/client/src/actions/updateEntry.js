const UPDATE_ENTRY = "UPDATE_ENTRY";
const UPDATE_ENTRY_SUCCESS = "UPDATE_ENTRY_SUCCESS";
const UPDATE_ENTRY_FAILURE = "UPDATE_ENTRY_FAILURE";

const updateEntry = (entry, history) => ({
  type: UPDATE_ENTRY,
  entry,
  history
});

const updateEntrySuccess = updatedEntry => ({
  type: UPDATE_ENTRY,
  updatedEntry
});

const updateEntryFailure = () => ({
  type: UPDATE_ENTRY
});

export default {
  UPDATE_ENTRY,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE,
  updateEntry,
  updateEntrySuccess,
  updateEntryFailure
};
