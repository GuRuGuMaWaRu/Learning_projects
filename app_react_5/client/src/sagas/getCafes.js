import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getCafesAction } from "../actions";

export default function*(action) {
  try {
    const { data: cafes } = yield call(axios.get, "api/cafes");
    yield put(getCafesAction.getCafesSuccess(cafes));
  } catch (err) {
    yield put(getCafesAction.getCafesFailure());
  }
}
