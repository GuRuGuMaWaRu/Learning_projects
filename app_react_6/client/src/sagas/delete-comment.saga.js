import axios from "axios";
import { call, put } from "redux-saga/effects";
import { deleteCommentAction } from "../actions";

function* deleteComment({ blogpostId, commentId }) {
  try {
    const { data: updateBlogpost } = yield call(
      axios.delete,
      `/api/blogposts/${blogpostId}/comment/${commentId}`
    );
    yield put(deleteCommentAction.deleteCommentSuccess(updateBlogpost));
  } catch (err) {
    yield put(deleteCommentAction.deleteCommentFailure(err));
  }
}

export default deleteComment;
