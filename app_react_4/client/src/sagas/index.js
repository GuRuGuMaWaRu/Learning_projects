import { all, takeLatest } from "redux-saga/effects";
import { createEntryAction, getEntriesAction } from "../actions";
import handleCreateEntry from "./createEntry";
import handleGetEntries from "./getEntries";

function* watchAll() {
  yield all([
    takeLatest(createEntryAction.CREATE_ENTRY, handleCreateEntry),
    takeLatest(getEntriesAction.GET_ENTRIES, handleGetEntries)
  ]);
}

export default watchAll;
