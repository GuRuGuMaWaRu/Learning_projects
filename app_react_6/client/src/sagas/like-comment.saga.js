import axios from "axios";
import { put, call } from "redux-saga/effects";
import { likeCommentAction } from "../actions";

function* likeComment(action) {
  try {
    const { data: updatedBlogpost } = yield call(
      axios.put,
      `/api/blogposts/${action.blogpostId}/comment/${action.commentId}`
    );
    yield put(likeCommentAction.likeCommentSuccess(updatedBlogpost));
  } catch (err) {
    yield put(likeCommentAction.likeCommentFailure(err));
  }
}

export default likeComment;
