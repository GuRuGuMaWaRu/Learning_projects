import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: ".7rem 0"
  },
  button: {
    marginTop: ".7rem"
  }
}));

const creationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "Too short!")
    .required("Required!"),
  description: Yup.string()
    .min(1, "Too short!")
    .required("Required")
});

const CafeForm = () => {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  return (
    <>
      <Typography variant="h4">Add a New Cafe</Typography>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={creationSchema}
        onSubmit={() => {
          setTimeout((values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <Form>
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
                  <FormHelperText id="error-text">{msg}</FormHelperText>
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
                  <FormHelperText id="error-text">{msg}</FormHelperText>
                )}
              />
            </FormControl>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Add
            </Button>
          </Form>
        )}
      />
    </>
  );
};

export default CafeForm;
