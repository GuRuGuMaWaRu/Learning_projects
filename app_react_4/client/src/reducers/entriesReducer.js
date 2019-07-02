import {
  getEntriesAction,
  getEntryAction,
  updateEntryAction
} from "../actions";

const initialState = {
  entries: [],
  selectedEntry: {
    _id: "",
    title: "",
    body: "",
    date: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case getEntriesAction.GET_ENTRIES_SUCCESS:
      return {
        ...state,
        entries: action.entries
      };
    case getEntryAction.GET_ENTRY_SUCCESS:
      return {
        ...state,
        selectedEntry: action.entry
      };
    case updateEntryAction.UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        selectedEntry: action.updatedEntry
      };
    default:
      return state;
  }
}
