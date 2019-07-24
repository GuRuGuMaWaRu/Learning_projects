import axios from "axios";
import { put, call } from "redux-saga/effects";
import { createAction } from "../actions";

function* createBlogpost() {
  try {
    yield call(axios.get("/api/blogposts"));
    yield put(createAction.createBlogpostSuccess());
  } catch (err) {
    yield put(createAction.createBlogpostFailure(err));
  }
}

export default createBlogpost;
