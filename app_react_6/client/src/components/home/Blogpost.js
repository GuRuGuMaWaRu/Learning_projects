import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components/macro";
import moment from "moment";

const stagger = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledArticle = styled.article`
  background-color: #f2f2f2;
  padding: 0.7rem 0.5rem;
  margin: 1rem;
  cursor: pointer;
  transition: box-shadow 0.4s;
  animation-name: ${stagger};
  animation-duration: 350ms;
  animation-delay: ${props => `calc(${props.index} * 100ms)`};
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  &:hover {
    box-shadow: 0px 11px 11px 0px #999;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`;

const StyledTitle = styled.span`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const StyledAuthor = styled.span`
  font-style: italic;
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Blogpost = ({ blogpost, index }) => {
  return (
    <StyledArticle key={blogpost._id} index={index}>
      <StyledHeading>
        <StyledTitle>{blogpost.title}</StyledTitle>
        <StyledAuthor> by {blogpost.author}</StyledAuthor>
      </StyledHeading>
      <p>
        {blogpost.body.length <= 50
          ? blogpost.body
          : `${blogpost.body.slice(0, 50)}...`}
      </p>
      <StyledDetails>
        <span>
          <b>Published:</b> {moment(blogpost.date).format("YYYY-MM-DD, HH:MM")}
        </span>
        <span>
          <ion-icon name="thumbs-up" /> {blogpost.likes}
        </span>
      </StyledDetails>
    </StyledArticle>
  );
};

Blogpost.propTypes = {
  blogpost: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.array,
    likes: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired
};

export default Blogpost;
