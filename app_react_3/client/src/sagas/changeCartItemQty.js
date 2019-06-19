import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  CHANGE_CART_ITEM_QTY,
  changeCartItemQtySuccess,
  changeCartItemQtyFailure
} from "../actions/changerCartItemQty";

function* handleChangeCartItemQty(action) {
  try {
    yield call(axios.post, "/api/cart/changeQty", action.qtyChangeData);
    yield put(changeCartItemQtySuccess(action.qtyChangeData));
  } catch (error) {
    yield put(changeCartItemQtyFailure(error));
  }
}

export default function*() {
  yield takeLatest(CHANGE_CART_ITEM_QTY, handleChangeCartItemQty);
}
