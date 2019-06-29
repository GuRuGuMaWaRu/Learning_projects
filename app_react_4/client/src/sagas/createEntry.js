import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { createEntryAction } from "../actions/index";

function* handleCreateEntry(action) {
  try {
    const { data: createdEntry } = yield call(
      axios.post,
      "api/entry/create",
      action.entryData
    );
    yield put(createEntryAction.createEntrySuccess(createdEntry));
    yield action.history.push("/");
  } catch (err) {
    yield put(createEntryAction.createEntryFailure(err));
  }
}

export default function*() {
  yield takeLatest(createEntryAction.CREATE_ENTRY, handleCreateEntry);
}
