import React, { Component } from "react";
import {
  Button,
  Container,
  DropdownButton,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./supnav.scss";
import loc from "../../assets/images/icons/location.png";
import user from "../../assets/images/icons/Account.png";
import arrow from "../../assets/images/icons/arrow_down.png";

export class SupNav extends Component {
  render() {
    return (
      <nav className="sup-nav">
        <Navbar bg="white" collapseOnSelect>
          <Container>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                <span className="d-flex align-items-center gap-1">
                  <img src={loc} alt="asd" /> <p>Москва</p>
                </span>
              }
              variant="outline-dark"
              target={arrow}
              className="btn-tr-background"
            >
              <div className="ps-2">
                <p className="main-p">Location here</p>
              </div>
            </DropdownButton>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-md-auto">
                <p className="nav-link d-none d-md-block">Проверить адрес</p>
                <p className="nav-link">
                  Среднее время доставки*: <b> 00:24:19</b>
                </p>
              </Nav>
              <Nav className="d-none d-md-flex align-items-center">
                <p className="nav-link">Время работы: с 11:00 до 23:00</p>
                <Button variant="outline-dark" className="btn-tr-back">
                  <img src={user} alt="user-logo" /> <p>Войти в аккаунт</p>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
  }
}

export default SupNav;
