import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  UPDATE_SHOP,
  updateShopSuccess,
  updateShopFailure
} from "../actions/updateShop";

function* handleUpdateShop(action) {
  try {
    yield call(axios.post, "/api/shop/update", action.shopData);
    yield put(updateShopSuccess());
  } catch (error) {
    yield put(updateShopFailure());
  }
}

export default function*() {
  yield takeLatest(UPDATE_SHOP, handleUpdateShop);
}
