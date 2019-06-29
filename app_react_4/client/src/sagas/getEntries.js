import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getEntriesAction } from "../actions";

export default function* handleGetEntries(action) {
  try {
    const { data: entries } = yield call(axios.get, "/api/entry/index");
    yield put(getEntriesAction.getEntriesSuccess(entries));
  } catch (err) {
    yield put(getEntriesAction.getEntriesFailure(err));
  }
}
