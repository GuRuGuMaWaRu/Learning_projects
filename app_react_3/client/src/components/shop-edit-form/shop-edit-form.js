import React from "react";

const ShopEditForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="shopNameInput">Shop name</label>
        <input type="text" className="form-control" id="shopNameInput" />
      </div>
      <div className="form-group">
        <label htmlFor="typeSelect">Type</label>
        <select className="form-control" id="typeSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="descriptionInput">Description</label>
        <textarea className="form-control" id="descriptionInput" rows="3" />
      </div>
      <button className="btn btn-success">Save</button>
    </form>
  );
};

export default ShopEditForm;
