import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  SELECT_SHOP,
  selectShopSuccess,
  selectShopFailure
} from "../actions/selectShop";

function* handleSelectShop(action) {
  try {
    const shop = yield call(axios.get, `/api/shop/select/${action.id}`);
    yield put(selectShopSuccess(shop.data));
  } catch (error) {
    yield put(selectShopFailure());
  }
}

export default function*() {
  yield takeLatest(SELECT_SHOP, handleSelectShop);
}
