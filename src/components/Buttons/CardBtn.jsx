import React, { Component } from "react";

export class CardBtn extends Component {
  render() {
    const { id, addToCart } = this.props;
    return (
      <button className="btn main-btn" onClick={() => addToCart(id)}>
        {this.props.children}
      </button>
    );
  }
}

export default CardBtn;
