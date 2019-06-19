import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  CLEAR_CART,
  clearCartSuccess,
  clearCartFailure
} from "../actions/clearCart";

function* handleClearCart() {
  try {
    yield call(axios.get, "/api/cart/clear");
    yield put(clearCartSuccess());
  } catch (error) {
    yield put(clearCartFailure(error));
  }
}

export default function*() {
  yield takeLatest(CLEAR_CART, handleClearCart);
}
