import { Component } from "react";
import logo from "../../assets/svg/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-holder">
        <div className="nav-wrapper container_2">
          <a href="/" className="logo">
            <img src={logo} alt="m2z logo"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
