import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./shop-edit-form.css";

const ShopEditForm = () => {
  const shopTypes = ["Weapons", "Magic", "Armor", "Travel gear", "Other"];

  const test = e => {
    e.preventDefault();
    console.log(e.target);
  };

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
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="name"
            render={({ field }) => (
              <div className="form-group">
                <label htmlFor="shopNameInput">Shop name</label>
                <input
                  {...field}
                  type="text"
                  className="form-control"
                  id="shopNameInput"
                />
              </div>
            )}
          />
          <ErrorMessage
            name="name"
            render={msg => <div className={styles.error}>{msg}</div>}
          />
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
//     <label htmlFor="typeSelect">Type</label>
//     <select className="form-control" id="typeSelect">
//       {shopTypes.map(shopType => (
//         <option key={shopType}>{shopType}</option>
//       ))}
//     </select>
//   </div>
//   <div className="form-group">
//     <label htmlFor="descriptionInput">Description</label>
//     <textarea className="form-control" id="descriptionInput" rows="3" />
//   </div>
//   <button className="btn btn-success" type="submit">
//     Save
//   </button>
// </form> */}
