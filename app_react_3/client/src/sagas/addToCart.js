import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  ADD_TO_CART,
  addToCartSuccess,
  addToCartFailure
} from "../actions/addToCart";

function* handleAddToCart(action) {
  const { itemId, itemCost } = action.payload;
  try {
    yield call(axios.post, "/api/cart/add", { itemId: itemId });
    yield put(addToCartSuccess(itemCost));
  } catch (error) {
    yield put(addToCartFailure());
  }
}

export default function*() {
  yield takeLatest(ADD_TO_CART, handleAddToCart);
}
