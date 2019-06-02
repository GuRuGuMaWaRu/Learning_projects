import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  ADD_TO_CART,
  addToCartSuccess,
  addToCartFailure
} from "../actions/addToCart";

function* handleAddToCart(action) {
  try {
    yield call(axios.post, "/api/cart/add", { itemId: action.itemId });
    yield put(addToCartSuccess());
  } catch (error) {
    yield put(addToCartFailure());
  }
}

export default function*() {
  yield takeLatest(ADD_TO_CART, handleAddToCart);
}
