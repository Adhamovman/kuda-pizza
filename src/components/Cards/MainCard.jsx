import React, { Component } from "react";
import "./maincard.scss";
import CardBtn from "../Buttons/CardBtn";
export class MainCard extends Component {
  render() {
    const { filter, image, heading, desc, price, discount, addToCart, id } =
      this.props;

    return (
      <div className="main-card">
        <div className="card-header">
          {filter ? (
            <div className="label">
              <p className="mini-p">{filter.toLocaleUpperCase()}</p>
            </div>
          ) : (
            ""
          )}

          <img src={image} alt={heading} />
        </div>
        <div className="card-body">
          <h3 className="card-h">{heading}</h3>
          <p className="card-text">{desc}</p>

          <div className="card-footer">
            <CardBtn addToCart={addToCart} id={id}>
              от {discount ? (price * (100 - discount)) / 100 : price} ₽
            </CardBtn>
            {discount ? <p className="old-price">{price} ₽</p> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default MainCard;
