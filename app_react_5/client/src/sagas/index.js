import { all, takeLatest } from "redux-saga/effects";
import {
  getCafesAction,
  getCafeAction,
  createCafeAction,
  deleteCafeAction,
  updateCafeAction
} from "../actions";
import getCafes from "./getCafes";
import getCafe from "./getCafe";
import createCafe from "./createCafe";
import deleteCafe from "./deleteCafe";
import updateCafe from "./updateCafe";

export default function*() {
  yield all([
    takeLatest(getCafesAction.GET_CAFES, getCafes),
    takeLatest(getCafeAction.GET_CAFE, getCafe),
    takeLatest(createCafeAction.CREATE_CAFE, createCafe),
    takeLatest(deleteCafeAction.DELETE_CAFE, deleteCafe),
    takeLatest(updateCafeAction.UPDATE_CAFE, updateCafe)
  ]);
}
