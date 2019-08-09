import { all, takeLatest } from "redux-saga/effects";
import {
  createAction,
  indexAction,
  getAction,
  createCommentAction,
  likeBlogpostAction
} from "../actions";
import createBlogpost from "./create-blogpost.saga";
import getBlogposts from "./get-all-blogposts.saga";
import getBlogpost from "./get-blogpost.saga";
import createComment from "./create-comment.saga";
import likeBlogpost from "./like-blogpost.saga";

export default function*() {
  yield all([
    takeLatest(createAction.CREATE_BLOGPOST, createBlogpost),
    takeLatest(indexAction.GET_BLOGPOSTS, getBlogposts),
    takeLatest(getAction.GET_BLOGPOST, getBlogpost),
    takeLatest(createCommentAction.CREATE_COMMENT, createComment),
    takeLatest(likeBlogpostAction.LIKE_BLOGPOST, likeBlogpost)
  ]);
}
