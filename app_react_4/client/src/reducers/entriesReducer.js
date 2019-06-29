import { getEntriesAction } from "../actions";

const initialState = {
  entries: [],
  selectedEntry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case getEntriesAction.GET_ENTRIES_SUCCESS:
      return {
        ...state,
        entries: action.entries
      };
    // case createEntryAction.CREATE_ENTRY_SUCCESS:
    //   return {
    //     ...state,
    //     entries: [...state.entries, action.createdEntry]
    //   };
    default:
      return state;
  }
}
