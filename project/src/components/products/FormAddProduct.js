import React, { Component } from "react";

export default class FormAddProduct extends Component {
  render() {
    return (
      <div className="add-product">
        <div className="panel-heading-add">
            <h3 className="panel-title">ADD PRODUCT</h3>
          </div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control form-dai"
              id="formGroupExampleInput"
              name="name"
              defaultValue=""
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Type category</label>
            <select class="form-control form-dai">
              <option>Giáo khoa</option>
              <option>Truyện</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Quantity</label>
            <input
              type="number"
              className="form-control form-dai"
              id="formGroupExampleInput"
              name="quantity"
              defaultValue=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Status</label>
            <input
              type="number"
              className="form-control form-dai"
              id="formGroupExampleInput"
              name="status"
              defaultValue=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Image</label>
            <input
              type="text"
              className="form-control form-dai"
              id="formGroupExampleInput"
              name="image"
              defaultValue=""
            />
          </div>
        </form>
      </div>
    );
  }
}
