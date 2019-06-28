import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { createEntryAction } from "../actions/index";

function* handleCreateEntry(action) {
  try {
    const savedEntry = yield call(
      axios.post,
      "/entry/create",
      action.entryData
    );
    yield put(createEntryAction.createEntrySuccess(savedEntry));
  } catch (err) {
    yield put(createEntryAction.createEntryFailure(err));
  }
}

export default function*() {
  yield takeLatest(createEntryAction.CREATE_ENTRY, handleCreateEntry);
}
