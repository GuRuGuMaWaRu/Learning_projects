import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Blogpost } from "./index";
import { getAllBlogpostsAction, clearBlogpostAction } from "../../actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBlogpostAction.clearBlogpost());
    dispatch(getAllBlogpostsAction.getBlogposts());
  }, [dispatch]);

  const blogposts = useSelector(state => state.blogposts);

  return (
    <>
      {blogposts.map((blogpost, index) => (
        <Blogpost key={blogpost._id} index={index} blogpost={blogpost} />
      ))}
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
