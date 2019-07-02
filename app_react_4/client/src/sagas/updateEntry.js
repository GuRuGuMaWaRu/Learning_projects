import axios from "axios";
import { put, call } from "redux-saga/effects";
import { updateEntryAction } from "../actions";

export default function* handleUpdateEntry(action) {
  try {
    const { data: updatedEntry } = yield call(
      axios.put,
      "/api/entry/update",
      action.entryData
    );
    yield put(updateEntryAction.updateEntrySuccess(updatedEntry));
    yield action.history.push("/entry");
  } catch (err) {
    yield put(updateEntryAction.updateEntryFailure(err));
  }
}
