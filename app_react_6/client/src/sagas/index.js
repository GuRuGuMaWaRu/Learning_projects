import { all, takeLatest } from "redux-saga/effects";
import {
  createBlogpostAction,
  getAllBlogpostsAction,
  getBlogpostAction,
  createCommentAction,
  likeBlogpostAction,
  likeCommentAction
} from "../actions";
import createBlogpost from "./create-blogpost.saga";
import getBlogposts from "./get-all-blogposts.saga";
import getBlogpost from "./get-blogpost.saga";
import createComment from "./create-comment.saga";
import likeBlogpost from "./like-blogpost.saga";
import likeComment from "./like-comment.saga";

export default function*() {
  yield all([
    takeLatest(createBlogpostAction.CREATE_BLOGPOST, createBlogpost),
    takeLatest(getAllBlogpostsAction.GET_BLOGPOSTS, getBlogposts),
    takeLatest(getBlogpostAction.GET_BLOGPOST, getBlogpost),
    takeLatest(createCommentAction.CREATE_COMMENT, createComment),
    takeLatest(likeBlogpostAction.LIKE_BLOGPOST, likeBlogpost),
    takeLatest(likeCommentAction.LIKE_COMMENT, likeComment)
  ]);
}
