import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles({
  form: {
    marginTop: "2rem"
  },
  formControl: {
    margin: ".7rem 0"
  },
  button: {
    marginTop: ".7rem"
  }
});

const creationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "Too short!")
    .required("Required!"),
  description: Yup.string()
    .min(1, "Too short!")
    .required("Required")
});

const CafeForm = ({ history, cafe, createCafe, deleteCafe, updateCafe }) => {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  const classes = useStyles();
  const isCreationForm = history.location.pathname === "/create";

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  return (
    <>
      <Typography variant="h4">
        {isCreationForm ? "Add a New Cafe" : "Edit Cafe"}
      </Typography>
      <Formik
        initialValues={{
          title: isCreationForm ? "" : cafe.title,
          description: isCreationForm ? "" : cafe.description
        }}
        validationSchema={creationSchema}
        onSubmit={async (values, actions) => {
          if (isCreationForm) {
            await createCafe(values);
          } else {
            await updateCafe({ ...values, id: cafe._id });
          }

          actions.setSubmitting(false);
        }}
        render={props => (
          <Form className={classes.form}>
            <FormControl
              className={classes.formControl}
              variant="outlined"
              fullWidth
            >
              <InputLabel ref={labelRef} htmlFor="title-input">
                Title
              </InputLabel>
              <Field
                name="title"
                render={({ field }) => (
                  <OutlinedInput
                    id="title-input"
                    labelWidth={labelWidth}
                    fullWidth
                    aria-describedby="error-text"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="title"
                render={msg => (
                  <FormHelperText id="error-text" variant="outlined" error>
                    {msg}
                  </FormHelperText>
                )}
              />
            </FormControl>
            <FormControl
              className={classes.formControl}
              variant="outlined"
              fullWidth
            >
              <InputLabel ref={labelRef} htmlFor="description-input">
                Description
              </InputLabel>
              <Field
                name="description"
                render={({ field }) => (
                  <OutlinedInput
                    id="description-input"
                    labelWidth={labelWidth}
                    fullWidth
                    multiline
                    aria-describedby="error-text"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="description"
                render={msg => (
                  <FormHelperText id="error-text" variant="outlined" error>
                    {msg}
                  </FormHelperText>
                )}
              />
            </FormControl>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              type="submit"
            >
              {isCreationForm ? "Add" : "Update"}
            </Button>
            {!isCreationForm && (
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                type="submit"
                onClick={() => deleteCafe(cafe._id)}
              >
                Delete
              </Button>
            )}
          </Form>
        )}
      />
    </>
  );
};

CafeForm.propTypes = {
  cafe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  createCafe: PropTypes.func.isRequired,
  deleteCafe: PropTypes.func.isRequired,
  updateCafe: PropTypes.func.isRequired
};

export default CafeForm;
