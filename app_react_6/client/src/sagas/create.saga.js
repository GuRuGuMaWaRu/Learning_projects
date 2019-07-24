import axios from "axios";
import { put, call } from "redux-saga/effects";
import { createAction } from "../actions";

function* createBlogpost(action) {
  try {
    yield call(axios.post("/api/blogposts", action.blogpost));
    yield put(createAction.createBlogpostSuccess());
    yield action.history.push("/");
  } catch (err) {
    yield put(createAction.createBlogpostFailure(err));
  }
}

export default createBlogpost;
