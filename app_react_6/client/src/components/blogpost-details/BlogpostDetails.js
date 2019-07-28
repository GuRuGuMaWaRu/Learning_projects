import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

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

const StyledLikes = styled.div`
  text-align: right;
  font-size: 1.5rem;
`;

const BlogpostDetails = () => {
  const blogpost = useSelector(state => state.blogpost);

  return (
    <>
      <StyledHeader>{blogpost.title}</StyledHeader>
      <StyledAuthor>
        <span>by {blogpost.author}</span>
        <span>{moment(blogpost.date).format(`YYYY-MM-DD, HH:MM`)}</span>
      </StyledAuthor>
      <StyledBody>{blogpost.body}</StyledBody>
      <StyledLikes>
        <ion-icon name="thumbs-up" /> {blogpost.likes}
      </StyledLikes>
    </>
  );
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
