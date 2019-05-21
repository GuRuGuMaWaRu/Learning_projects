import axios from "axios";
import { put, call, select, takeLatest } from "redux-saga/effects";
import {
  SAVE_SHOP_DATA,
  saveShopSuccess,
  saveShopError
} from "../actions/saveShop";

const selectShopState = state => state.shopForm;

function* saveShop() {
  const shopData = yield select(selectShopState);

  try {
    yield call(axios.post, "/api/shop/save", shopData);
    yield put(saveShopSuccess());
  } catch (error) {
    yield put(saveShopError());
  }
}

export default function*() {
  yield takeLatest(SAVE_SHOP_DATA, saveShop);
}
