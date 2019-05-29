import axios from "axios";
import { push } from "connected-react-router";
import { all, put, call, takeLatest } from "redux-saga/effects";
import {
  DELETE_SHOP,
  deleteShopSuccess,
  deleteShopError
} from "../actions/deleteShop";

function* handleDeleteShop(action) {
  try {
    yield call(axios.get, `/api/shop/delete/${action.shopId}`);
    yield put(deleteShopSuccess());
    yield put(push("/editstore"));
  } catch (error) {
    yield put(deleteShopError(error));
  }
}

export default function*() {
  yield takeLatest(DELETE_SHOP, handleDeleteShop);
}
