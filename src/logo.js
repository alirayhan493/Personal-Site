import { Component } from "react";
import logo from "./logo.png";
import { Spring } from "react-spring/renderprops";
import "./logo.css";

class LogoControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var newState;
    newState = this.state.showMe === false ? true : false;
    this.setState({ showMe: newState });
  }

  practiceFunction() {}

  render() {
    if (this.state.showMe) {
      return (
        <Spring
          from={{ opacity: 0, marginTop: -1000 }}
          to={{ opacity: 1, marginTop: 0 }}
        >
          {(props) => (
            <div id="youtube player" style={props}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/yAZWTKJ31Lg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div id="backbtn">
                <button onClick={this.handleClick}> Return</button>
              </div>
            </div>
          )}
        </Spring>
      );
    } else {
      return (
        <Spring
          from={{ opacity: 0, marginTop: -1000 }}
          to={{ opacity: 1, marginTop: 0 }}
        >
          {(props) => (
            <div style={props}>
              <a onClick={this.handleClick}>
                <img src={logo} width="750" height="750"></img>
              </a>
            </div>
          )}
        </Spring>
      );
    }
  }
}

export default LogoControl;
