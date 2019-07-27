import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getAction } from "../actions";

function* getBlogpost(action) {
  try {
    const { data: blogpost } = yield call(
      axios.get,
      `api/blogposts/${action.id}`
    );
    yield put(getAction.getBlogpostSuccess(blogpost));
    yield action.history.push(`blogposts/${action.id}`);
  } catch (err) {
    yield put(getAction.getBlogpostFailure());
  }
}

export default getBlogpost;
