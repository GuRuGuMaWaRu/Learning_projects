import { all, takeLatest } from "redux-saga/effects";
import { createAction } from "../actions";
import createBlogpost from "./create.saga";

export default function*() {
  yield all([takeLatest(createAction.createBlogpost, createBlogpost)]);
}
