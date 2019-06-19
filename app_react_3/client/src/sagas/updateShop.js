import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  UPDATE_SHOP,
  updateShopSuccess,
  updateShopFailure
} from "../actions/updateShop";
import { selectShop } from "../actions/selectShop";
import { highlightShop } from "../actions/highlightShop";

function* handleUpdateShop(action) {
  try {
    const data = yield call(axios.post, "/api/shop/update", action.shopData);
    yield put(updateShopSuccess());
    yield put(highlightShop(data.data));
    yield put(selectShop(data.data));
  } catch (error) {
    yield put(updateShopFailure());
  }
}

export default function*() {
  yield takeLatest(UPDATE_SHOP, handleUpdateShop);
}
