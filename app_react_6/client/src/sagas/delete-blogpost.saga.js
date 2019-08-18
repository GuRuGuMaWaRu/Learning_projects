import axios from "axios";
import { put, call } from "redux-saga/effects";
import { deleteBlogpostAction } from "../actions";

function* deleteBlogpost({ id, history }) {
  try {
    yield call(axios.delete, `/api/blogposts/${id}`);
    yield put(deleteBlogpostAction.deleteBlogpostSuccess(id));
    yield history.push("/");
  } catch (err) {
    yield put(deleteBlogpostAction.deleteBlogpostFailure(err));
  }
}

export default deleteBlogpost;
