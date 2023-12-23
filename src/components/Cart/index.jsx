import React, { Component } from "react";
import { Container, Offcanvas } from "react-bootstrap";
import CartCard from "../Cards/CartCard";
import "./cart.scss";
export class Cart extends Component {
  render() {
    const { show, handleClose, products, incProduct, decProduct } = this.props;
    return (
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ваш заказ</Offcanvas.Title>
        </Offcanvas.Header>
        {products.length > 0 ? (
          <>
            <Offcanvas.Body>
              {products.map((el, i) => (
                <CartCard
                  incProduct={incProduct}
                  decProduct={decProduct}
                  key={i}
                  {...el}
                />
              ))}
            </Offcanvas.Body>
            <div className="offcanvas-footer mb-3">
              <Container>
                <div className="order-price py-3">
                  <div className="disc-price d-flex justify-content-between">
                    <p>Скидка:</p>
                    <p>
                      {products.reduce(
                        (acc, el) =>
                          acc + (el.price * el.discount * el.quantity) / 100,
                        0
                      )}{" "}
                      ₽
                    </p>
                  </div>
                  <div className="full-price d-flex justify-content-between">
                    <p>Итого:</p>
                    <b>
                      {" "}
                      <p>
                        {products.reduce(
                          (acc, el) =>
                            acc +
                            (el.price * (100 - el.discount) * el.quantity) /
                              100,
                          0
                        )}{" "}
                        ₽
                      </p>
                    </b>
                  </div>
                </div>
                <button className="btn main-btn w-100 mx-auto justify-content-center">
                  Оформить заказ
                </button>
              </Container>
            </div>
          </>
        ) : (
          <div className="empty-card"></div>
        )}
      </Offcanvas>
    );
  }
}

export default Cart;
