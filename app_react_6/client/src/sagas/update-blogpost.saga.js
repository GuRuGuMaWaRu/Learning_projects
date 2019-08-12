import axios from "axios";
import { call, put } from "redux-saga/effects";
import { updateBlogpostAction } from "../actions";

function* updateBlogpost(action) {
  const { id, data, history } = action;
  try {
    const { data: updatedBlogpost } = yield call(
      axios.put,
      `/api/blogposts/${id}`,
      data
    );
    yield put(updateBlogpostAction.updateBlogpostSuccess(updatedBlogpost));
    yield put(history.push(`/${id}`));
  } catch (err) {
    yield put(updateBlogpostAction.updateBlogpostFailure(err));
  }
}

export default updateBlogpost;
