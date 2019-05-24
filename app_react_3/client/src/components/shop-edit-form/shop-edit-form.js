import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
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

const ProductName = ({ field }) => {
  return (
    <div className="form-group col-md-6">
      <input {...field} type="text" className="form-control" />
    </div>
  );
};

const ProductPrice = ({ field }) => {
  return (
    <div className="form-group col-md-6">
      <input {...field} type="number" className="form-control" min={0} />
    </div>
  );
};

const ProductList = ({ values }) => (
  <FieldArray
    name="products"
    render={arrayHelpers => (
      <div>
        {values.products.map((product, index) => (
          <div key={index}>
            <div className="form-row">
              <Field name={`products.${index}.name`} render={ProductName} />
              <Field name={`products.${index}.price`} render={ProductPrice} />
            </div>
          </div>
        ))}
        <button
          className="btn btn-primary product-input-button"
          type="button"
          onClick={() => arrayHelpers.push("")}
        >
          Add Product Field
        </button>
        <button
          className="btn btn-primary product-input-button"
          type="button"
          onClick={() => arrayHelpers.pop()}
        >
          Remove Product Field
        </button>
      </div>
    )}
  />
);

const ErrorText = msg => (
  <div className={classNames(styles.withError)}>{msg}</div>
);

const ShopEditForm = ({ onSaveShop }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        type: "Magic",
        description: "",
        products: [{ name: "", price: 0 }]
      }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        onSaveShop(values);
        // actions.setSubmitting = false;
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Field name="name" render={Name} />
          <ErrorMessage name="name" render={ErrorText} />
          <Field name="type" render={Type} />
          <Field name="description" render={Description} />
          <label>Products (name and price)</label>
          <ProductList values={values} />
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

ShopEditForm.propTypes = {
  onSaveShop: PropTypes.func.isRequired
};

export default ShopEditForm;
