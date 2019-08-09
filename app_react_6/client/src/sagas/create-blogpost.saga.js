import axios from "axios";
import { put, call } from "redux-saga/effects";
import { createBlogpostAction } from "../actions";

function* createBlogpost(action) {
  try {
    yield call(axios.post, "api/blogposts", action.blogpost);
    yield put(createBlogpostAction.createBlogpostSuccess());
    yield action.history.push("/");
  } catch (err) {
    yield put(createBlogpostAction.createBlogpostFailure(err));
  }
}

export default createBlogpost;
