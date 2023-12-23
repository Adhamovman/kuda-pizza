import React, { Component } from "react";

export class SecandoryBtn extends Component {
  render() {
    return <button className="btn secandory-btn">{this.props.children}</button>;
  }
}

export default SecandoryBtn;
