import React from "react";
import Header from "./components/layout/Header";
import LeftMenu from "./components/layout/LeftMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { withFirebase } from "./components/Firebase/context";

import "./App.css";
import ProductList from "./components/products/ProductList";
import CategoriesList from "./components/categories/CategoriesList";
import FormAddProduct from "./components/products/FormAddProduct";
import FormAddCategories from "./components/categories/FormAddCategories";
import FormUpdateCat from "./components/categories/FormUpdateCat";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      name: ""
    };
  }

  getTableCall(table, index) {
    switch (table) {
      case "categories": {
        return this.props.firebase.getCategories(index);
      }
      case "products": {
        return this.props.firebase.products(index);
      }
      default: {
        return "";
      }
    }
  }

  getData = table => {
    let tableCall = this.getTableCall(table);
    tableCall.on("value", snapshot => {
      const object = snapshot.val();
      if (object) {
        const objectList = Object.keys(object).map(key => ({
          ...object[key],
          id: key
        }));
        this.setState({
          [table]: objectList
        });
      } else {
        this.setState({
          [table]: []
        });
      }
    });
  };
  componentDidMount() {
    this.getData("categories");
    this.getData("products");
  }

  addCategory = name => {
    this.props.firebase.getCategories().push({ name });
    this.setState({
      name: ""
    });
  };

  deleteCategory = index => {
    console.log(index);
    this.props.firebase.categories(index).remove();
  };
  editCategories = (index, data) => {
    this.props.firebase.categories(index).set({
      name: data
    });
  };

  render() {
    const { categories, products } = this.state;
    return (
      <Router>
        <Header />
        <div className="app-main">
          <LeftMenu />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route
              path="/book"
              component={() => <ProductList products={products} />}
            />
            <Route
              path="/categories"
              component={() => (
                <CategoriesList
                  categories={categories}
                  deleteCategory={this.deleteCategory}
                  editCategories={this.editCategories}
                />
              )}
            />
          </Switch>
          <Route path="/addProduct" component={() => <FormAddProduct />} />
          <Route
            path="/addCategory"
            component={() => (
              <FormAddCategories addCategory={this.addCategory} />
            )}
          />
          <Route path="/updateCat" component={<FormUpdateCat />} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
