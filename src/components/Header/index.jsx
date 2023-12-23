import React, { Component } from "react";
import SupNav from "../SupNav";
import MainNav from "../MainNav";

export class Header extends Component {
  render() {
    return (
      <>
        <header>
          <SupNav />
        </header>
        <MainNav />
      </>
    );
  }
}

export default Header;
