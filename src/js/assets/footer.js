import { Component } from "react";
import logo from "../../assets/svg/logo.svg";
import iconSubmit from "../../assets/svg/icons/submit.svg";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container_2">
          <div className="footer-head">
            <img src={logo} alt="M2Z Logo"></img>
            <div className="footer-head-inner">
              <span>Wanna know more?</span>
              <button className="btn light">Start now!</button>
            </div>
          </div>
          <div className="hr m-0"></div>
          <div className="footer-body">
            <div className="row">
              <div className="row col-lg-4 footer-body-main-wrapper">
                <div className="footer-body-main">
                  <h2>Subscribe to our newsletter</h2>
                  <form action=".">
                    <div className="input-wrapper">
                      <input type="email" placeholder="Email"></input>
                      <button type="submit" className="btn btn-submit">
                        <img src={iconSubmit} alt="Submit Icons"></img>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row col-lg-8">
                <div className="col-lg-4">
                  <div className="footer-body-item">
                    <h3>About</h3>
                    <div className="footer-body-item-link">
                      <a href="#!">Our Story</a>
                    </div>
                    <div className="footer-body-item-link">
                      <a href="#!">Team</a>
                    </div>
                    <div className="footer-body-item-link">
                      <a href="#!">Jobs</a>
                    </div>
                    <div className="footer-body-item-link">
                      <a href="#!">Projects</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-body-item">
                    <h3>Help</h3>
                    <div className="footer-body-item-link">
                      <a href="#!">FAQs</a>
                    </div>
                    <div className="footer-body-item-link">
                      <a href="#!">Jobs</a>
                    </div>
                    <div className="footer-body-item-link">
                      <a href="#!">Contact Us</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-body-item">
                    <h3>Follow Us</h3>
                    <div className="footer-body-item-link">
                      <a href="#!">GitHub</a>
                    </div>
                    <div className="footer-body-item-link">
                      <a href="#!">Instagram</a>
                    </div>
                    <div className="footer-body-item-link">
                      <a href="#!">Discord</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-footer">
            <div className="footer-footer-copyright">
              <p>Copyright &copy; 2021 Tim Naumann. All rights reserved.</p>
            </div>
            <div className="footer-footer-links">
              <Link to="/imprint">Imprint</Link>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
