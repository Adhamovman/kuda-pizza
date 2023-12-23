import React, { Component } from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/icons/logo.png";
import "./footer.scss";

import facebook from "../../assets/images/icons/facebook.svg";
import phone from "../../assets/images/icons/phone.svg";
import loc from "../../assets/images/icons/loc.svg";
import insta from "../../assets/images/icons/insta.svg";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <div className="foot-base gap-3">
            <div className="d-flex d-col labels">
              <div className="d-flex gap-2 align-items-center">
                <img src={logo} alt="logo" />
                <p className="main-p">Куда пицца</p>
              </div>
              <p className="mini-p d-none d-md-block">
                © Copyright 2021 — Куда Пицца
              </p>
            </div>
            <div className="d-flex d-col about">
              <p className="cat-foot">Куда пицца</p>
              <a href="#">О компании </a>
              <a href="#">Пользовательское соглашение</a>
              <a href="#">Условия гарантии</a>
            </div>
            <div className="d-flex d-col help">
              <p className="cat-foot">Помощь</p>
              <a href="#">Ресторан</a>
              <a href="#">Контакты</a>
              <a href="#">Поддержка</a>
              <a href="#">Отследить заказ</a>
            </div>
            <div className="d-flex d-col contact">
              <p className="cat-foot">Контакты</p>
              <a href="#" className="contact-way">
                <img src={phone} alt="phone-icon" />
                <p>+7 (926) 223-10-11</p>
              </a>
              <a href="#" className="contact-way">
                <img src={loc} alt="phone-icon" />
                <p>Москва, ул. Юных Ленинцев, д.99</p>
              </a>
              <div className="socials">
                <a href="#" className="contact-way">
                  <img src={facebook} alt="phone-icon" />
                  <p>Facebok</p>
                </a>
                <a href="#" className="contact-way">
                  <img src={insta} alt="phone-icon" />
                  <p>Instagram</p>
                </a>
              </div>
              <p className="mini-p d-md-none">© Copyright 2021 — Куда Пицца</p>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
