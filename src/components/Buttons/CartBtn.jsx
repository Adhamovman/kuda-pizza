import React, { Component } from "react";
import cartIcon from "../../assets/images/icons/Shopping cart.png";
class CartBtn extends Component {
  render() {
    const { handleShow } = this.props;
    return (
      <button className="btn cart-btn d-lg-none" onClick={handleShow}>
        <img src={cartIcon} alt="cart" />
        <p className="cart-count">{this.props.itemsCount}</p>
      </button>
    );
  }
}

export default CartBtn;
