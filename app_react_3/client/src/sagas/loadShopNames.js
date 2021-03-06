import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  LOAD_SHOP_NAMES,
  loadShopNamesSuccess,
  loadShopNamesFailure
} from "../actions/loadShopNames";

function* handleLoadShopNames() {
  try {
    const shopNames = yield call(axios.get, "/api/shop/getNames");
    yield put(loadShopNamesSuccess(shopNames.data));
  } catch (error) {
    yield put(loadShopNamesFailure());
  }
}

export default function*() {
  yield takeLatest(LOAD_SHOP_NAMES, handleLoadShopNames);
}
