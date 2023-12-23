import React, { Component } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import MainBtn from "../Buttons/MainBtn";
import "./location.scss";

class Address extends Component {
  state = {
    screenSize: {
      width: window.innerWidth,
    },
  };

  handleResize = () => {
    this.setState({
      screenSize: {
        width: window.innerWidth,
      },
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <section id="address">
        <Container>
          <div className="location">
            <p className="big-text">Проверить адрес доставки</p>
            <InputGroup>
              <Form.Control
                placeholder="Адрес"
                aria-label="Адрес"
                aria-describedby="basic-addon2"
              />
              <MainBtn>
                {this.state.screenSize.width > 576 ? (
                  "Проверить"
                ) : (
                  <img src="/images/send.svg" alt="send" />
                )}
              </MainBtn>
            </InputGroup>
          </div>
        </Container>
      </section>
    );
  }
}

export default Address;
