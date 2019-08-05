import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createCommentAction } from "../../actions";
import { clearBlogpostAction } from "../../actions/index";

const StyledForm = styled(Form)`
  margin: 2rem 0;
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
  padding: .6rem .8rem;
  margin-top: .7rem;
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

const CommentSchema = Yup.object().shape({
  author: Yup.string().required("Required"),
  text: Yup.string().required("Required")
});

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        postId: postId,
        author: "",
        text: ""
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(createCommentAction.createComment(values));
        actions.setSubmitting(false);
      }}
      validationSchema={CommentSchema}
      render={({ isSubmitting }) => (
        <StyledForm>
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
          <div>
            <div>
              <StyledField
                id="text"
                name="text"
                render={({ field }) => (
                  <StyledTextArea
                    {...field}
                    rows="5"
                    placeholder="Enter your comment here"
                  />
                )}
              />
              <ErrorMessage name="text">
                {msg => <StyledError>{msg}</StyledError>}
              </ErrorMessage>
            </div>
            <StyledSubmitButton type="submit" disabled={isSubmitting}>
              COMMENT
            </StyledSubmitButton>
          </div>
        </StyledForm>
      )}
    />
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired
};

export default CommentForm;
