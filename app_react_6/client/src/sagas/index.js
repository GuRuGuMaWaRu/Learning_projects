import { all, takeLatest } from "redux-saga/effects";
import {
  createBlogpostAction,
  getAllBlogpostsAction,
  getBlogpostAction,
  updateBlogpostAction,
  likeBlogpostAction,
  deleteBlogpostAction,
  createCommentAction,
  likeCommentAction
} from "../actions";
import createBlogpost from "./create-blogpost.saga";
import getBlogposts from "./get-all-blogposts.saga";
import getBlogpost from "./get-blogpost.saga";
import updateBlogpost from "./update-blogpost.saga";
import likeBlogpost from "./like-blogpost.saga";
import deleteBlogpost from "./delete-blogpost.saga";
import createComment from "./create-comment.saga";
import likeComment from "./like-comment.saga";

export default function*() {
  yield all([
    takeLatest(createBlogpostAction.CREATE_BLOGPOST, createBlogpost),
    takeLatest(getAllBlogpostsAction.GET_BLOGPOSTS, getBlogposts),
    takeLatest(getBlogpostAction.GET_BLOGPOST, getBlogpost),
    takeLatest(updateBlogpostAction.UPDATE_BLOGPOST, updateBlogpost),
    takeLatest(likeBlogpostAction.LIKE_BLOGPOST, likeBlogpost),
    takeLatest(deleteBlogpostAction.DELETE_BLOGPOST, deleteBlogpost),
    takeLatest(createCommentAction.CREATE_COMMENT, createComment),
    takeLatest(likeCommentAction.LIKE_COMMENT, likeComment)
  ]);
}
