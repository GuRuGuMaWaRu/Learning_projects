import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  createBlogpostAction,
  getBlogpostAction,
  updateBlogpostAction
} from "../../actions";

const StyledHeader = styled.h2`
  text-align: center;
  word-spacing: 3px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0.7rem 0;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  text-align: right;
  margin-right: 1rem;
`;

const StyledField = styled(Field)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  width: 100%;

  &::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
`;

const StyledTextArea = styled.textarea`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  width: 100%;
  padding-right: 0;

  &::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
`;

const StyledError = styled.div`
  display: block;
  color: #84163b;
`;

const StyledSubmitButton = styled.button`
  align-self: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  };
  color: #f2f2f2;
  padding: 1rem 1.8rem;
  margin-top: 1.5rem;
  border: none;
  background-color: #ba2d65;
  transition: all .3s;
  cursor: pointer;
  outline-style: none;
  &:hover {
    box-shadow: 0px 11px 11px 0px #999;
  };
  &:active {
    background-color: #84163b;
  };
`;

const FormSchema = Yup.object().shape({
  author: Yup.string()
    .max(60, "Too Long!")
    .required("Required"),
  title: Yup.string()
    .max(60, "Too long!")
    .required("Required"),
  body: Yup.string().required("Required")
});

const BlogForm = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const blogpostId = history.location.pathname.split("/")[2];
    dispatch(getBlogpostAction.getBlogpost(blogpostId));
  }, []);
  const blogpost = useSelector(state => state.blogpost);
  const isEditForm = history.location.pathname.split("/")[1] === "update";

  return (
    <>
      <StyledHeader>
        {isEditForm ? "Update Blogpost" : "Add New Blogpost"}
      </StyledHeader>
      <Formik
        initialValues={{
          author: isEditForm ? blogpost.author : "",
          title: isEditForm ? blogpost.title : "",
          body: isEditForm ? blogpost.body : "",
          date: isEditForm
            ? blogpost.date
            : moment().format("YYYY-MM-DD, HH:mm")
        }}
        enableReinitialize={true}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          if (isEditForm) {
            dispatch(
              updateBlogpostAction.updateBlogpost(blogpost._id, values, history)
            );
          } else {
            dispatch(createBlogpostAction.createBlogpost(values, history));
          }
          actions.setSubmitting(false);
        }}
        render={() => (
          <StyledForm>
            <StyledInputGroup>
              <StyledLabel htmlFor="author">* Author Name:</StyledLabel>
              <div>
                <StyledField
                  type="text"
                  id="author"
                  name="author"
                  component="input"
                  placeholder="John Dow"
                />
                <ErrorMessage name="author">
                  {msg => <StyledError>{msg}</StyledError>}
                </ErrorMessage>
              </div>
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor="title">* Blogpost Title:</StyledLabel>
              <div>
                <StyledField
                  type="text"
                  id="title"
                  name="title"
                  component="input"
                  placeholder="New Blog Post"
                />
                <ErrorMessage name="title">
                  {msg => <StyledError>{msg}</StyledError>}
                </ErrorMessage>
              </div>
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor="date">Date:</StyledLabel>
              <StyledField
                type="text"
                id="date"
                name="date"
                component="input"
              />
              <ErrorMessage name="date">
                {msg => <StyledError>{msg}</StyledError>}
              </ErrorMessage>
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor="body">* Blogpost Body:</StyledLabel>
              <div>
                <StyledField
                  id="body"
                  name="body"
                  render={({ field }) => (
                    <StyledTextArea
                      {...field}
                      rows="5"
                      placeholder="Enter your blopost here"
                    />
                  )}
                />
                <ErrorMessage name="body">
                  {msg => <StyledError>{msg}</StyledError>}
                </ErrorMessage>
              </div>
            </StyledInputGroup>
            <StyledSubmitButton type="submit">
              {isEditForm ? "UPDATE" : "ADD"}
            </StyledSubmitButton>
          </StyledForm>
        )}
      />
    </>
  );
};

export default BlogForm;
