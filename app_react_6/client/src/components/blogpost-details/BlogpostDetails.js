import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";
import { CommentForm } from "./";
import { getAction } from "../../actions";

const StyledHeader = styled.h2`
  word-spacing: 3px;
  margin: 4rem 0 2rem;
`;

const StyledAuthor = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;

const StyledBody = styled.p`
  text-align: justify;
  line-height: 1.6rem;
`;

const StyledDets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const StyledCommentsHeader = styled.h3`
  text-align: center;
`;

const StyledButton = styled.button`
  color: #222;
  padding: 1rem 1.2rem;
  border: none;
  margin-right: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  outline-style: none;
  &:hover {
    box-shadow: 0px 11px 11px 0px #999;
  }
`;

const StyledCommentButton = styled(StyledButton)`
  background-color: #f2f2f2;
  &:active {
    background-color: #e3e3e3;
  }
`;

const StyledEditButton = styled(StyledButton)`
  background-color: #f2f2f2;
  &:active {
    background-color: #e3e3e3;
  }
`;

const StyledDeleteButton = styled(StyledButton)`
  color: #f2f2f2;
  background-color: #ba2d65;
  &:active {
    background-color: #84163b;
  }
`;

const StyledCommentDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogpostDetails = ({ history }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = history.location.pathname.slice(1);
    dispatch(getAction.getBlogpost(id));
  }, []);
  const blogpost = useSelector(state => state.blogpost);

  if (blogpost.title && blogpost.title.length > 0) {
    return (
      <>
        <article>
          <StyledHeader>{blogpost.title}</StyledHeader>
          <StyledAuthor>
            <span>by {blogpost.author}</span>
            <span>{moment(blogpost.date).format(`YYYY-MM-DD, HH:MM`)}</span>
          </StyledAuthor>
          <StyledBody>{blogpost.body}</StyledBody>
          <StyledDets>
            <div>
              <StyledCommentButton
                onClick={() => setShowCommentForm(!showCommentForm)}
              >
                Add Comment
              </StyledCommentButton>
              <StyledEditButton>Edit</StyledEditButton>
              <StyledDeleteButton>Delete</StyledDeleteButton>
            </div>
            <span>
              <ion-icon name="thumbs-up" /> {blogpost.likes}
            </span>
          </StyledDets>
        </article>
        {showCommentForm && (
          <CommentForm
            postId={blogpost._id}
            handleSubmit={() => setShowCommentForm(false)}
          />
        )}
        <StyledCommentsHeader>Comments</StyledCommentsHeader>
        {blogpost.comments.map(comment => (
          <div key={comment._id}>
            <StyledCommentDetails>
              <h5>by {comment.author}</h5>
              <span>{moment(comment.date).format(`YYYY-MM-DD, HH:MM`)}</span>
              <div>
                <ion-icon name="thumbs-up" /> {blogpost.likes}
              </div>
            </StyledCommentDetails>
            <p>{comment.text}</p>
          </div>
        ))}
      </>
    );
  } else {
    return null;
  }
};

BlogpostDetails.propTypes = {
  blogpost: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.array,
    likes: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default BlogpostDetails;
