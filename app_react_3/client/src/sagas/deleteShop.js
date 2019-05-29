import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  DELETE_SHOP,
  deleteShopSuccess,
  deleteShopError
} from "../actions/deleteShop";

function* handleDeleteShop(action) {
  try {
    yield call(axios.get, `/api/shop/delete/${action.shopId}`);
    yield put(deleteShopSuccess());
  } catch (error) {
    yield put(deleteShopError(error));
  }
}

export default function*() {
  yield takeLatest(DELETE_SHOP, handleDeleteShop);
}
