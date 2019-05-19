import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./shop-edit-form.css";

const SelectName = ({ field }) => (
  <div className="form-group">
    <label htmlFor="shopNameInput">Shop name</label>
    <input {...field} type="text" className="form-control" id="shopNameInput" />
  </div>
);

const SelectType = ({ field }) => {
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

const ErrorText = msg => <div className={styles.error}>{msg}</div>;

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
        // actions.setSubmitting = false;
      }}
    >
      {({ isSubmitting }, shopTypes) => (
        <Form>
          <Field name="name" render={SelectName} />
          <ErrorMessage name="name" render={ErrorText} />
          <Field name="type" render={SelectType} />
        </Form>
      )}
    </Formik>
  );
};

export default ShopEditForm;
// {/* <form>
// <div className="form-group">
//   <label htmlFor="shopNameInput">Shop name</label>
//   <input type="text" className="form-control" id="shopNameInput" />
// </div>
//   <div className="form-group">
//     <label htmlFor="descriptionInput">Description</label>
//     <textarea className="form-control" id="descriptionInput" rows="3" />
//   </div>
//   <button className="btn btn-success" type="submit">
//     Save
//   </button>
// </form> */}
