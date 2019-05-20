import axios from "axios";
import { put, call, select, takeLatest } from "redux-saga/effects";
import { SAVE_SHOP, saveShopSuccess, saveShopError } from "../actions/saveShop";

const selectShopDate = state => state.shopForm;

function* saveShop() {}

export default function*() {
  yield takeLatest(SAVE_SHOP, saveShop);
}
