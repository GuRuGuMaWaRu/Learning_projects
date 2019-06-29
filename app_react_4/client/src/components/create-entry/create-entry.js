import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "2rem"
  },
  submitButton: {
    marginTop: "1rem"
  }
});

const FormField = ({ field, label, multiline = false }) => (
  <TextField
    {...field}
    label={label}
    margin="normal"
    variant="outlined"
    fullWidth
    multiline={multiline}
  />
);

const CreateEntry = ({ history, createEntry }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4">New Journal Entry</Typography>
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
        onSubmit={async (values, { setSubmitting }) => {
          await createEntry(values, history);
          setSubmitting(false);
        }}
      >
        {formikProps => (
          <Form>
            <Field
              name="title"
              render={({ field }) => <FormField field={field} label="Title" />}
            />
            <ErrorMessage name="title" component="div" />
            <Field
              name="body"
              render={({ field }) => (
                <FormField field={field} label="Body" multiline={true} />
              )}
            />
            <ErrorMessage name="body" component="div" />
            <Button
              className={classes.submitButton}
              type="submit"
              variant="outlined"
              color="secondary"
              disabled={formikProps.isSubmitting}
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

CreateEntry.propTypes = {
  createEntry: PropTypes.func.isRequired
};

export default CreateEntry;
