import { Component } from "react";
import logo from "../../assets/svg/logo.svg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container_2">
          <div className="footer-head">
            <img src={logo} alt="M2Z Logo"></img>
            <div className="footer-head-inner">
              <span>Wanna know more?</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
