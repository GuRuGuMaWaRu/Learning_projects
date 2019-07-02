import axios from "axios";
import { call, put } from "redux-saga/effects";
import { deleteEntryAction, getEntriesAction } from "../actions";

export default function* handleDeleteEntry(action) {
  try {
    yield call(axios.delete, `/api/entry/delete/${action.id}`);
    yield put(deleteEntryAction.deleteEntrySuccess());
    if (action.isJournalPage) {
      yield put(getEntriesAction.getEntries());
    } else {
      yield action.history.push("/");
    }
  } catch (err) {
    yield put(deleteEntryAction.deleteEntry(err));
  }
}
