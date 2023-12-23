import CartBtn from "./components/Buttons/CartBtn";
import Categories from "./components/Categories";
import Discounts from "./components/Discounts";
import Address from "./components/Location";
import MainNav from "./components/MainNav";
import Pizza from "./components/Pizza";
import SupNav from "./components/SupNav";
import React, { Component } from "react";
import { PRODUCTS } from "./data/products";
import { ToastContainer, toast } from "react-toastify";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
      show: false,
    };
  }
  setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
  addToCart = (id) => {
    let hasCart = this.state.cartItems.find((el) => el.id === id);
    if (hasCart) {
      toast.info(`Product ${id} is added`);
    } else {
      let newProduct = PRODUCTS.find((el) => el.id === id);
      newProduct.quantity = 1;
      this.setState({ cartItems: [...this.state.cartItems, newProduct] });
    }
    this.setLocalStorage("cartItems", this.state.cartItems);
  };
  incProduct = (id) => {
    let cartProducts;
    cartProducts = this.state.cartItems.map((el) => {
      if (el.id === id) {
        el.quantity++;
      }
      return el;
    });
    this.setState({ cartItems: [...cartProducts] });
    this.setLocalStorage("cartItems", this.state.cartItems);
  };

  decProduct = (id) => {
    let cartProducts;
    let newProduct = this.state.cartItems.find((el) => el.id === id);
    if (newProduct.quantity === 1) {
      cartProducts = this.state.cartItems.filter((el) => el.id !== id);
    } else {
      cartProducts = this.state.cartItems.map((el) => {
        if (el.id === id) {
          el.quantity--;
        }
        return el;
      });
    }
    this.setState({ cartItems: [...cartProducts] });
    this.setLocalStorage("cartItems", cartProducts);
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <ToastContainer />
        <CartBtn
          itemsCount={this.state.cartItems.length}
          handleShow={this.handleShow}
        />
        <SupNav />
        <MainNav
          handleShow={this.handleShow}
          sum={this.state.cartItems.reduce(
            (acc, el) =>
              acc + (el.price * (100 - el.discount) * el.quantity) / 100,
            0
          )}
        />
        <main>
          <Cart
            products={this.state.cartItems}
            handleClose={this.handleClose}
            show={this.state.show}
            incProduct={this.incProduct}
            decProduct={this.decProduct}
          />
          <Categories />
          <Discounts />
          <Address />
          <Pizza
            addToCart={this.addToCart}
            products={PRODUCTS.filter((el) => el.category === "pizza")}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
