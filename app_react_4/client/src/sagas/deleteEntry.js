import axios from "axios";
import { call, put } from "redux-saga/effects";
import { deleteEntryAction, getEntriesAction } from "../actions";

export default function* handleDeleteEntry(action) {
  try {
    yield call(axios.delete, `/api/entry/delete/${action.id}`);
    yield put(getEntriesAction.getEntries());
    yield put(deleteEntryAction.deleteEntrySuccess());
  } catch (err) {
    yield put(deleteEntryAction.deleteEntry(err));
  }
}
