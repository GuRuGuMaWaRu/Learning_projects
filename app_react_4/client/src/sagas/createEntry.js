import axios from "axios";
import { put, call } from "redux-saga/effects";
import { createEntryAction } from "../actions/index";

export default function* handleCreateEntry(action) {
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
