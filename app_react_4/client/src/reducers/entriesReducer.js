import { getEntriesAction } from "../actions";
import { getEntryAction } from "../actions";

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
    case getEntryAction.CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        entry: action.entry
      };
    default:
      return state;
  }
}
