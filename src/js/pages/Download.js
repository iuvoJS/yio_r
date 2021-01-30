// import { Link } from "react-router-dom";
import platform from "platform";
import { Component } from "react";

import "../../css/download.min.css";

import pathConfig from "../../config/path.json";
import { Helmet } from "react-helmet";

class Download extends Component {
  componentDidMount() {
    console.log(pathConfig)
    document.querySelector(".download__platform").innerHTML =
      platform.os.family;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Download</title>
        </Helmet>
        <div className="download">
          <div className="download__content">
            <p>
              Downloading for <span className="download__platform"></span>...
            </p>
            <p>
              If your download doesn't start{" "}
              <a href="#!" className="download__platform__link">
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
