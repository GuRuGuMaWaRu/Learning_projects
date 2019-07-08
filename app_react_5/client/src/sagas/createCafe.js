import axios from "axios";
import { put, call } from "redux-saga/effects";
import { createCafeAction } from "../actions";

export default function*(action) {
  try {
    yield call(axios.post, "api/cafes", action.data);
    yield put(createCafeAction.createCafeSuccess());
  } catch (err) {
    yield put(createCafeAction.createCafeFailure());
  }
}
