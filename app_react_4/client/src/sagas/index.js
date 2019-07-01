import { all, takeLatest } from "redux-saga/effects";
import {
  createEntryAction,
  getEntriesAction,
  getEntryAction
} from "../actions";
import handleCreateEntry from "./createEntry";
import handleGetEntries from "./getEntries";
import handleGetEntry from "./getEntry";

function* watchAll() {
  yield all([
    takeLatest(createEntryAction.CREATE_ENTRY, handleCreateEntry),
    takeLatest(getEntriesAction.GET_ENTRIES, handleGetEntries),
    takeLatest(getEntryAction.GET_ENTRY, handleGetEntry)
  ]);
}

export default watchAll;
