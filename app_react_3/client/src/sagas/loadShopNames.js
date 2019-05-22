import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  LOAD_SHOP_NAMES,
  loadShopNamesSuccess,
  loadShopNamesError
} from "../actions/loadShopNames";

const processShopNamesData = data => {
  return data.map(item => item.name);
};

function* handleLoadShopNames() {
  try {
    const shopNames = yield call(axios.get, "/api/shop/getNames");
    yield put(loadShopNamesSuccess(processShopNamesData(shopNames.data)));
  } catch (error) {
    yield put(loadShopNamesError());
  }
}

export default function*() {
  yield takeLatest(LOAD_SHOP_NAMES, handleLoadShopNames);
}
