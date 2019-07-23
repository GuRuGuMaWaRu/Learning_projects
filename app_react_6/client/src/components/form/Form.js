import React from "react";
import styled from "styled-components/macro";
import moment from "moment";
import { Formik, Form, Field } from "formik";

const StyledHeader = styled.h2`
  text-align: center;
  word-spacing: 3px;
`;

const BlogForm = () => {
  return (
    <>
      <StyledHeader>Add New Blogpost</StyledHeader>
      <Formik
        initialValues={{
          author: "",
          title: "",
          body: "",
          date: moment().format("YYYY-MM-DD, HH:mm")
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <Form>
            <label htmlFor="author">Author Name:</label>
            <Field
              type="text"
              id="author"
              name="author"
              component="input"
              placeholder="John Dow"
            />
            <label htmlFor="title">Blogpost Title:</label>
            <Field
              type="text"
              id="title"
              name="title"
              component="input"
              placeholder="New Blog Post"
            />
            <label htmlFor="date">Date:</label>
            <Field type="text" id="date" name="date" component="input" />
            <label htmlFor="body">Blogpost Body:</label>
            <Field
              id="body"
              name="body"
              component="textarea"
              placeholder="Entery your blopost here"
            />
            <button type="submit">Add</button>
          </Form>
        )}
      />
    </>
  );
};

export default BlogForm;
