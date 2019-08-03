import axios from "axios";
import { put, call } from "redux-saga/effects";
import { createCommentAction } from "../actions";

function* createComment(action) {
  try {
    const { data: updatedBlogpost } = yield call(
      axios.post,
      "api/blogposts/comment",
      action.data
    );
    yield put(createCommentAction.createCommentSuccess(updatedBlogpost));
  } catch (err) {
    yield put(createCommentAction.createCommentFailure(err));
  }
}

export default createComment;
