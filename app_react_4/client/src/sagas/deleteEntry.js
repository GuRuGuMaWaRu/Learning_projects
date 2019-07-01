import axios from "axios";
import { call, put } from "redux-saga/effects";
import { deleteEntryAction } from "../actions";

export default function* handleDeleteEntry(action) {
  try {
    yield call(axios.delete, `/api/entry/delete/${action.id}`);
    yield put(deleteEntryAction.deleteEntrySuccess());
  } catch (err) {
    yield put(deleteEntryAction.deleteEntry(err));
  }
}
