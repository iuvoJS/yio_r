// import $ from "jquery";

import { Component } from "react";
import platform from "platform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faGithub,
faDiscord,
faPatreon,
faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Iphone from "./iphone";

class Main extends Component {
  componentDidMount() {
    console.log(platform.os.family);
  }

  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-lg-3">
            <Iphone path="iphone-bg.png" />
          </div>
          <div className="col-lg-6 content">
            <h1>Download now!</h1>
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="button-group">
              <button className="btn primary">Download</button>
              <button className="btn secondary">Read more</button>
            </div>
          </div>
        </div>
        <div className="socials">
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faPatreon} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return <Main />;
}

export { App };
