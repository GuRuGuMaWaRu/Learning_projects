import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  SAVE_SHOP,
  saveShopSuccess,
  saveShopFailure
} from "../actions/saveShop";
import { selectShop } from "../actions/selectShop";
import { highlightShop } from "../actions/highlightShop";

function* handleSaveShop(action) {
  try {
    const data = yield call(axios.post, "/api/shop/save", action.data);
    yield put(saveShopSuccess());
    yield put(highlightShop(data.data));
    yield put(selectShop(data.data));
  } catch (error) {
    yield put(saveShopFailure());
  }
}

export default function*() {
  yield takeLatest(SAVE_SHOP, handleSaveShop);
}
