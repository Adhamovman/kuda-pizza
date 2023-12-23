import React, { Component } from "react";

export class MainBtn extends Component {
  render() {
    return (
      <button className="btn main-btn">
        {this.props.children}
      </button>
    );
  }
}

export default MainBtn;
