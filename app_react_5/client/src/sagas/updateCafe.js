import axios from "axios";
import { put, call } from "redux-saga/effects";
import { updateCafeAction } from "../actions";

export default function*(action) {
  try {
    yield call(axios.put, "api/cafe", action.data);
    yield put(updateCafeAction.updateCafeSuccess());
  } catch (err) {
    yield put(updateCafeAction.updateCafeFailure());
  }
}
