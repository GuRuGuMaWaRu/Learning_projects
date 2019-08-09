import axios from "axios";
import { put, call } from "redux-saga/effects";
import { likeBlogpostAction } from "../actions";

function* likeBlogpost(action) {
  try {
    const { data: updatedBlogpost } = yield call(
      axios.put,
      `api/blogposts/like/${action.id}`
    );
    yield put(likeBlogpostAction.likeBlogpostSuccess(updatedBlogpost));
  } catch (err) {
    yield put(likeBlogpostAction.likeBlogpostFailure(err));
  }
}

export default likeBlogpost;
