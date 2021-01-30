import { Component } from "react";
import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-holder">
        <div className="nav-wrapper container_2">
          <Link to="/" className="logo">
            <img src={logo} alt="m2z logo"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
