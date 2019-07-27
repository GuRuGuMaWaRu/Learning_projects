import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { Blogpost } from "./index";
import { indexAction } from "../../actions";

const StyledHeader = styled.h2`
  text-align: center;
  word-spacing: 3px;
`;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(indexAction.getBlogposts());
  }, [dispatch]);

  const blogposts = useSelector(state => state.blogposts);

  return (
    <>
      <StyledHeader>Blogposts</StyledHeader>
      <section>
        {blogposts.map((blogpost, index) => (
          <Blogpost key={blogpost._id} index={index} blogpost={blogpost} />
        ))}
      </section>
    </>
  );
};

Home.propTypes = {
  blogposts: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      comments: PropTypes.array,
      likes: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired
    })
  )
};

export default Home;