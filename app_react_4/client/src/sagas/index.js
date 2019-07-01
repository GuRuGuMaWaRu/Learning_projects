import { all, takeLatest } from "redux-saga/effects";
import {
  createEntryAction,
  getEntriesAction,
  getEntryAction,
  deleteEntryAction
} from "../actions";
import handleCreateEntry from "./createEntry";
import handleGetEntries from "./getEntries";
import handleGetEntry from "./getEntry";
import handleDeleteEntry from "./deleteEntry";

function* watchAll() {
  yield all([
    takeLatest(createEntryAction.CREATE_ENTRY, handleCreateEntry),
    takeLatest(getEntriesAction.GET_ENTRIES, handleGetEntries),
    takeLatest(getEntryAction.GET_ENTRY, handleGetEntry),
    takeLatest(deleteEntryAction.DELETE_ENTRY, handleDeleteEntry)
  ]);
}

export default watchAll;
