import { all, takeLatest } from "redux-saga/effects";
import { createAction, indexAction } from "../actions";
import createBlogpost from "./create.saga";
import getBlogposts from "./index.saga";

export default function*() {
  yield all([
    takeLatest(createAction.CREATE_BLOGPOST, createBlogpost),
    takeLatest(indexAction.GET_BLOGPOSTS, getBlogposts)
  ]);
}
