import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getCafeAction } from "../actions";

export default function*(action) {
  try {
    const { data: cafe } = yield call(axios.get, "api/cafes/" + action.id);
    yield put(getCafeAction.getCafeSuccess(cafe));
    yield action.history.push("/edit");
  } catch (err) {
    yield put(getCafeAction.getCafeFailure());
  }
}
