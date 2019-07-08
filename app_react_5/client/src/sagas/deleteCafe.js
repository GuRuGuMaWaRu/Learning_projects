import axios from "axios";
import { put, call } from "redux-saga/effects";
import { deleteCafeAction } from "../actions";

export default function*(action) {
  try {
    yield call(axios.delete, "api/cafes", action.id);
    yield put(deleteCafeAction.deleteCafeSuccess());
  } catch (err) {
    yield put(deleteCafeAction.deleteCafeFailure());
  }
}
