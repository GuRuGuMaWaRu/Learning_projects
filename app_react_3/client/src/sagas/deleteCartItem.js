import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  DELETE_CART_ITEM,
  deleteCartItemSuccess,
  deleteCartItemFailure
} from "../actions/deleteCartItem";

function* handleDeleteCartItem(action) {
  const { itemId } = action;
  try {
    yield call(axios.post, "/api/cart/deleteItem", { itemId });
    yield put(deleteCartItemSuccess(itemId));
  } catch (error) {
    yield put(deleteCartItemFailure(error));
  }
}

export default function*() {
  yield takeLatest(DELETE_CART_ITEM, handleDeleteCartItem);
}
