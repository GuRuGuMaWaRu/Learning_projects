import { createEntryAction } from "../actions";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case createEntryAction.CREATE_ENTRY_SUCCESS:
      return [...state, action.createdEntry];
    default:
      return state;
  }
}
