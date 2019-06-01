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

const ShopEditForm = ({ shopData: { shop, products } = {}, onSubmit }) => {
  const displayedProducts = shop
    ? products.map(product => ({ name: product.name, price: product.price }))
    : [{ name: "", price: 0 }];

  return (
    <Formik
      initialValues={{
        shopId: shop ? shop._id : null,
        name: shop ? shop.name : "",
        type: shop ? shop.type : "Magic",
        description: shop ? shop.description : "",
        products: displayedProducts
      }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        onSubmit(values);
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
  isLoading: PropTypes.bool,
  shopData: PropTypes.shape({
    shop: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string
    }),
    products: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
      })
    )
  }),
  onSubmit: PropTypes.func.isRequired
};

export default ShopEditForm;
