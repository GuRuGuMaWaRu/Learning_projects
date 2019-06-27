import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Container from "@material-ui/core/Container";

export default function CreateEntry() {
  return (
    <Container>
      <h2>Add New Journal Entry</h2>
      <Formik
        initialValues={{ title: "", body: "" }}
        validate={values => {
          let errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
          if (!values.body) {
            errors.body = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
            <Field component="textarea" name="body" />
            <ErrorMessage name="body" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
