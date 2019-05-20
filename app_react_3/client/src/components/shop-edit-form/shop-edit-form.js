import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classNames from "classnames";
import styles from "./shop-edit-form.css";

const Name = ({ field }) => {
  return (
    <div className="form-group">
      <label htmlFor="shopNameInput">Shop name</label>
      <input
        {...field}
        type="text"
        className="form-control"
        id="shopNameInput"
      />
    </div>
  );
};

const Type = ({ field }) => {
  const shopTypes = ["Weapons", "Magic", "Armor", "Travel gear", "Other"];

  return (
    <div className="form-group">
      <label htmlFor="typeSelect">Type</label>
      <select {...field} className="form-control" id="typeSelect">
        {shopTypes.map(shopType => (
          <option key={shopType}>{shopType}</option>
        ))}
      </select>
    </div>
  );
};

const Description = ({ field }) => (
  <div className="form-group">
    <label htmlFor="descriptionInput">Description</label>
    <textarea
      {...field}
      className="form-control"
      id="descriptionInput"
      rows="3"
    />
  </div>
);

const ErrorText = msg => (
  <div className={classNames(styles.withError)}>{msg}</div>
);

const ShopEditForm = () => {
  return (
    <Formik
      initialValues={{ name: "", type: "Magic", description: "" }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        // actions.setSubmitting = false;
      }}
    >
      {({ isSubmitting }, shopTypes) => (
        <Form>
          <Field name="name" render={Name} />
          <ErrorMessage name="name" render={ErrorText} />
          <Field name="type" render={Type} />
          <Field name="description" render={Description} />
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ShopEditForm;
