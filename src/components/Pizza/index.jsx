import React, { Component } from "react";
import SecandoryBtn from "../Buttons/SecandoryBtn";
import "./pizza.scss";
import { Container } from "react-bootstrap";

import MainCard from "../Cards/MainCard";

export class Pizza extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <section id="pizza">
        <Container>
          <div className="enterence">
            <h2 className="main-h">Пицца</h2>
            <SecandoryBtn>
              <img src="/images/filter.svg" alt="filter" />
              <p>Фильтры</p>
            </SecandoryBtn>
          </div>
          <div className="products-row">
            {products.map((el, i) => (
              <MainCard addToCart={addToCart} key={i} {...el} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default Pizza;
