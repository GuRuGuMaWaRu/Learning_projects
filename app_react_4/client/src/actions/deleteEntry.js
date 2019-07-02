const DELETE_ENTRY = "DELETE_ENTRY";
const DELETE_ENTRY_SUCCESS = "DELETE_ENTRY_SUCCESS";
const DELETE_ENTRY_FAILURE = "DELETE_ENTRY_FAILURE";

const deleteEntry = (id, history, isJournalPage) => ({
  type: DELETE_ENTRY,
  id,
  history,
  isJournalPage
});

const deleteEntrySuccess = () => ({
  type: DELETE_ENTRY_SUCCESS
});

const deleteEntryFailure = () => ({
  type: DELETE_ENTRY_FAILURE
});

export default {
  DELETE_ENTRY,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILURE,
  deleteEntry,
  deleteEntrySuccess,
  deleteEntryFailure
};
