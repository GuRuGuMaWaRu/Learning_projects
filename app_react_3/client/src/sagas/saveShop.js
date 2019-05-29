import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { SAVE_SHOP, saveShopSuccess, saveShopError } from "../actions/saveShop";

function* handleSaveShop(action) {
  try {
    yield call(axios.post, "/api/shop/save", action.data);
    yield put(saveShopSuccess());
  } catch (error) {
    yield put(saveShopError());
  }
}

export default function*() {
  yield takeLatest(SAVE_SHOP, handleSaveShop);
}
