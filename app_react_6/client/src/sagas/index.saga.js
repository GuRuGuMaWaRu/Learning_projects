import axios from "axios";
import { put, call } from "redux-saga/effects";
import { indexAction } from "../actions";

export default function*() {
  try {
    const { data: blogposts } = yield call(axios.get, "api/blogposts");
    yield put(indexAction.getBlogpostsSuccess(blogposts));
  } catch (err) {
    yield put(indexAction.getBlogpostsFailure(err));
  }
}
