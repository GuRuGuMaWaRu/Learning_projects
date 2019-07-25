import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
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
      <div>
        {blogposts.map(blogpost => (
          <div key={blogpost._id}>{blogpost.title}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
