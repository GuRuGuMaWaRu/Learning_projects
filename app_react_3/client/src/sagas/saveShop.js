import axios from "axios";
import { push } from "connected-react-router";
import { all, put, call, takeLatest } from "redux-saga/effects";
import { SAVE_SHOP, saveShopSuccess, saveShopError } from "../actions/saveShop";

function* handleSaveShop(action) {
  try {
    yield put(push("/"));
    // yield call(axios.post, "/api/shop/save", action.data);
    // yield all([put(saveShopSuccess()), put(push("/"))]);
  } catch (error) {
    yield put(saveShopError());
  }
}

export default function*() {
  yield takeLatest(SAVE_SHOP, handleSaveShop);
}
