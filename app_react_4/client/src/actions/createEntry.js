const CREATE_ENTRY = "CREATE_ENTRY";
const CREATE_ENTRY_SUCCESS = "CREATE_ENTRY_SUCCESS";
const CREATE_ENTRY_FAILURE = "CREATE_ENTRY_FAILURE";

const createEntry = entryData => ({
  type: CREATE_ENTRY,
  entryData
});

const createEntrySuccess = createdEntry => ({
  type: CREATE_ENTRY_SUCCESS,
  createdEntry
});

const createEntryFailure = () => ({
  type: CREATE_ENTRY_FAILURE
});

export default {
  CREATE_ENTRY,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_FAILURE,
  createEntry,
  createEntrySuccess,
  createEntryFailure
};
