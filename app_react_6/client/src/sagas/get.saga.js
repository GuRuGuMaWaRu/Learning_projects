import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getAction } from "../actions";

function* getBlogpost(action) {
  try {
    const path = `api/blogposts/${action.id}`;
    const { data: blogpost } = yield call(axios.get, path);
    yield put(getAction.getBlogpostSuccess(blogpost));
  } catch (err) {
    yield put(getAction.getBlogpostFailure());
  }
}

export default getBlogpost;
