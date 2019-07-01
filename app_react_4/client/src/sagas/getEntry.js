import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getEntryAction } from "../actions";

export default function* handleGetEntry(action) {
  try {
    const { data: entry } = yield call(
      axios.get,
      `/api/entry/get/${action.id}`
    );
    yield put(getEntryAction.getEntrySuccess(entry));
  } catch (err) {
    yield put(getEntryAction.getEntryFailure(err));
  }
}
