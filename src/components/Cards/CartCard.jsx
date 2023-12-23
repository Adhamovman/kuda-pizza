import React, { Component } from "react";
import "./cartcard.scss";
export class CartCard extends Component {
  render() {
    const {
      desc,
      discount,
      price,
      heading,
      id,
      image,
      quantity,
      incProduct,
      decProduct,
    } = this.props;
    return (
      <>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-4 d-flex align-items-center">
              <img
                src={image}
                className="img-fluid rounded-start "
                alt={heading}
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{desc}</p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div className="btns">
                    <button
                      className="btn"
                      onClick={() => decProduct(id)}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      className="btn"
                      onClick={() => incProduct(id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-p">
                    {discount ? (price * (100 - discount)) / 100 : price} ₽
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartCard;
