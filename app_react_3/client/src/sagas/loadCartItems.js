import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  LOAD_CART_ITEMS,
  loadCartItemsSuccess,
  loadCartItemsFailure
} from "../actions/loadCartItems";

function* handleLoadCartItems(aciton) {
  try {
    const cartItems = yield call(axios.get, "/api/cart/get");

    yield put(loadCartItemsSuccess(cartItems.data));
  } catch (error) {
    yield put(loadCartItemsFailure());
  }
}

export default function*() {
  yield takeLatest(LOAD_CART_ITEMS, handleLoadCartItems);
}
