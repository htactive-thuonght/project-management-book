import React, { Component } from "react";

export default class FormUpdateCat extends Component {

  render() {
    return (
      <div className="add-product">
        <div className="panel-heading-add">
          <h3 className="panel-title">UPDATE CATEGORY</h3>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name category</label>
            <input
              type="text"
              className="form-control form-dai"
              id="formGroupExampleInput"
              name="name"
              defaultValue={this.state.name}
            />
          </div>
          <button type="button" className="btn btn-success" >
            UPDATE
          </button>
        </form>
      </div>
    );
  }
}
