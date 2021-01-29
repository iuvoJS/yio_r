import { Link } from "react-router-dom";
import { Component } from "react";
import Preview from "../assets/preview";

import "../../css/landing.min.css";

import Navbar from "../assets/navbar";
import Footer from "../assets/footer";

import iconDesign from "../../assets/svg/icons/design.svg";
import iconLevels from "../../assets/svg/icons/levels.svg";
import iconSubject from "../../assets/svg/icons/subject.svg";
import iconSecurity from "../../assets/svg/icons/security.svg";

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="container_2">
            <div className="row">
              <div className="col-lg-6 content">
                <h1>Yeeet It Out!</h1>
                <h3>Lorem ipsum dolor sit amet</h3>
                <div className="download-group">
                  <Link to="/download-app">
                    <button className="btn primary">Download</button>
                  </Link>
                  <span>
                    The app is available for <strong>Windows 7 +</strong>,{" "}
                    <strong>OS X 10.9 +</strong>, and <strong>Linux</strong>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 content-image">
                <Preview />
              </div>
            </div>
            <div className="hr"></div>
          </div>
          <div className="container_2">
            <div className="widget-wrapper row">
              <div className="widget_wrapper col-lg-3 col-md-6 ">
                <div className="widget">
                  <div className="widget__inner">
                    <div className="widget__head">
                      <img src={iconDesign} alt="Design"></img>
                    </div>
                    <div className="widget__body">
                      <h4>Design</h4>
                      <p>
                        We have spent a lot of money getting friends and Indians
                        from Fivrr to do the design for the levels because we
                        both can not even draw a straight line.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget_wrapper col-lg-3 col-md-6">
                <div className="widget">
                  <div className="widget__inner">
                    <div className="widget__head">
                      <img src={iconLevels} alt="Level"></img>
                    </div>
                    <div className="widget__body">
                      <h4>Level</h4>
                      <p>
                        The game Yeeet It Out currently has more than 50 levels
                        and we are releasing 5 new ones every week. Every Level
                        is different and we put a lot of work into it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget_wrapper  col-lg-3 col-md-6 ">
                <div className="widget">
                  <div className="widget__inner">
                    <div className="widget__head">
                      <img src={iconSecurity} alt="Security"></img>
                    </div>
                    <div className="widget__body">
                      <h4>Security</h4>
                      <p>
                        We do not collect any data that could damage your
                        privacy. Our app also has a very good AntiCheat so that
                        the fun cannot be disturbed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget_wrapper col-lg-3 col-md-6 ">
                <div className="widget">
                  <div className="widget__inner">
                    <div className="widget__head">
                      <img src={iconSubject} alt="Subject"></img>
                    </div>
                    <div className="widget__body">
                      <h4>Clean Code</h4>
                      <p>
                        We're both perfectionists, not in our grades or life,
                        but in programming. The code is nicely commented and
                        available on GitHub.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
