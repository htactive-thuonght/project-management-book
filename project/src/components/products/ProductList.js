import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        <div>
          <NavLink to={{ pathname: "/addProduct" }} className="link">
            <button type="button" className="btn btn-success">
              Add Book <i className="fa fa-plus" />
            </button>
          </NavLink>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">LIST OF PRODUCTS</h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>NAME PRODUCT</th>
                    <th>TYPE</th>
                    <th>QUANTITY</th>
                    <th>STATUS</th>
                    <th>IMAGE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody id="productList">
                  {this.props.products.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.quantity}</td>
                        <td>{item.status}</td>
                        <td>{item.image}</td>
                        <td>
                          <i className="fa fa-trash" />
                          <i className="fa fa-pencil" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
