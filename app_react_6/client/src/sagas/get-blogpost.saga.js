import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getBlogpostAction } from "../actions";

function* getBlogpost(action) {
  try {
    const path = `api/blogposts/${action.id}`;
    const { data: blogpost } = yield call(axios.get, path);
    yield put(getBlogpostAction.getBlogpostSuccess(blogpost));
  } catch (err) {
    yield put(getBlogpostAction.getBlogpostFailure());
  }
}

export default getBlogpost;
