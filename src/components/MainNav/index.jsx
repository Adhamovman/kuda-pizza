import React, { Component } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./mainnav.scss";
import logo from "../../assets/images/icons/logo.png";
import cart from "../../assets/images/icons/cart.png";
import user from "../../assets/images/icons/Account.png";

export class MainNav extends Component {
  render() {
    const { sum, handleShow } = this.props;
    return (
      <Navbar expand="lg" bg="white" className="mainnav">
        <Container>
          <Navbar.Brand className="d-flex align-items-center gap-2" href="#">
            <img src={logo} alt="logo" />
            <p>Куда пицца</p>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle-btn" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link className="auth d-md-none">
                <img src={user} alt="user-logo" /> <p>Войти в аккаунт</p>
              </Nav.Link>
              <Nav.Link href="#action1">Акции</Nav.Link>
              <Nav.Link href="#action2">Пицца</Nav.Link>{" "}
              <Nav.Link href="#action3">Суши</Nav.Link>{" "}
              <Nav.Link href="#action4">Напитки</Nav.Link>{" "}
              <Nav.Link href="#action5">Закуски</Nav.Link>
              <Nav.Link href="#action6">Комбо</Nav.Link>
              <Nav.Link href="#action5">Десерты</Nav.Link>
              <Nav.Link href="#action5">Соусы</Nav.Link>
              <NavDropdown title="Другое" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>{" "}
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>{" "}
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-none d-lg-block">
              <button className="btn main-btn" onClick={handleShow}>
                <img src={cart} alt="cart" />
                {sum} $
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainNav;

// I = imread('boy.jpg');
// B = imresize(I, [64, 64]);
// subplot(211); imshow(I);
// subplot(212);
// imshow(B);

// rasm = rgb2gray(I);
// [r, c] = size(rasm);
// imgg = double(rasm);
// yc = fwht(imgg);
// >> yr = fwht(yc');
// >> y = yr';
// >> yo = y;
// >> y(256:r, 256:c) = 0;
// >> Teskari1 = ifwht(y);
// >> Teskari2 = ifwht(Teskari1');
// >> imgr = Teskari2';
// >> imgr8 = uint8(imgr);
// >> imwrite(imgr8, "Siqilgan.jpg");
// >> imwrite(rasm, "Siqilmagan.jpg");
// >> subplot(221)
// >> imshow(rasm); title("Kiruvchi tasvir")
// >> subplot(222)
// >> imshow(imadjust(yo)); title("Adamar tr keof-ti")
// >> subplot(223)
// >> imshow(imadjust(y)); title("Transpanerlangan Adamar keof-ti")
// >> subplot(224)
// >> imshow(imgr8); title("Siqilgan tasvir");

// >> I = imread('photo_2023-12-11_21-43-47.jpg');
// >> rasm = rgb2gray(I);
// >> imshow(I);
// >> imshow(rasm);
// >> a = imcrop(rasm)
// >> imshow(a)
