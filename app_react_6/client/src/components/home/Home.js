import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";
import { indexAction } from "../../actions";

const StyledHeader = styled.h2`
  text-align: center;
  word-spacing: 3px;
`;

const StyledArticle = styled.article`
  background-color: #f2f2f2;
  padding: 0.7rem 0.5rem;
  margin: 1rem;
  cursor: pointer;
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 0px 6px 14px 0px #888;
  }
`;

const StyledHeading = styled.div`
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
        {blogposts.map(blogpost => (
          <StyledArticle key={blogpost._id}>
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
                <b>Published:</b>{" "}
                {moment(blogpost.date).format("YYYY-MM-DD, HH:MM")}
              </span>
              <span>
                <ion-icon name="thumbs-up" /> {blogpost.likes}
              </span>
            </StyledDetails>
          </StyledArticle>
        ))}
      </section>
    </>
  );
};

export default Home;
