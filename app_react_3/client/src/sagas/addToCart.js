import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  ADD_TO_CART,
  addToCartSuccess,
  addToCartFailure
} from "../actions/addToCart";

function* handleAddToCart(action) {
  const { itemId, itemPrice, itemName } = action.itemData;
  try {
    yield call(axios.post, "/api/cart/add", { itemId, itemName });
    yield put(addToCartSuccess({ itemId, itemPrice, itemName }));
  } catch (error) {
    yield put(addToCartFailure());
  }
}

export default function*() {
  yield takeLatest(ADD_TO_CART, handleAddToCart);
}
