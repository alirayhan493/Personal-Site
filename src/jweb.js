import React, { Component } from "react";
import "./jweb.css";
import { Spring } from "react-spring/renderprops";
import LogoControl from "./logo";

class JWeb extends Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Ford" };
  }

  render() {
    return (
      <div className="body-container">
        <div id="logo">
          <LogoControl />
        </div>
      </div>
    );
  }
}

export default JWeb;
