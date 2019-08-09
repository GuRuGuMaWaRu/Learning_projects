import axios from "axios";
import { put, call } from "redux-saga/effects";
import { getAllBlogpostsAction } from "../actions";

function* getBlogposts() {
  try {
    const { data: blogposts } = yield call(axios.get, "api/blogposts");
    yield put(getAllBlogpostsAction.getBlogpostsSuccess(blogposts));
  } catch (err) {
    yield put(getAllBlogpostsAction.getBlogpostsFailure(err));
  }
}

export default getBlogposts;
