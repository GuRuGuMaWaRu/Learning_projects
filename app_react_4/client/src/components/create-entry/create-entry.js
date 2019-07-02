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
  buttons: {
    display: "flex",
    justifyContent: "space-between",
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

const CreateEntry = ({
  history,
  entry,
  createEntry,
  deleteEntry,
  updateEntry
}) => {
  const classes = useStyles();
  const isCreationForm = history.location.pathname === "/create";

  return (
    <Container className={classes.container}>
      <Typography variant="h4">
        {isCreationForm ? "New Journal Entry" : "Edit Entry"}
      </Typography>
      <Formik
        initialValues={{
          title: isCreationForm ? "" : entry.title,
          body: isCreationForm ? "" : entry.body
        }}
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
          if (isCreationForm) {
            await createEntry(values, history);
          } else {
            await updateEntry({ ...values, _id: entry._id }, history);
          }
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
            <div className={classes.buttons}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                disabled={formikProps.isSubmitting}
              >
                {isCreationForm ? "Add" : "Update"}
              </Button>
              {!isCreationForm && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => deleteEntry(entry._id, history, false)}
                >
                  Delete
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

CreateEntry.propTypes = {
  history: PropTypes.object,
  entry: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  createEntry: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  updateEntry: PropTypes.func.isRequired
};

export default CreateEntry;
