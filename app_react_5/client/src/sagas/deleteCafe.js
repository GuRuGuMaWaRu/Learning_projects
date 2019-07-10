import axios from "axios";
import { put, call } from "redux-saga/effects";
import { deleteCafeAction, getCafesAction } from "../actions";

export default function*(action) {
  try {
    yield call(axios.delete, `api/cafes/${action.id}`);
    yield put(deleteCafeAction.deleteCafeSuccess());

    if (action.isCafePage) {
      yield action.history.push("/");
    } else {
      yield put(getCafesAction.getCafes());
    }
  } catch (err) {
    yield put(deleteCafeAction.deleteCafeFailure());
  }
}
