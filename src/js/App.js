// import $ from "jquery";
import { Component } from "react";
import Preview from "./assets/preview";

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="container_2">
          <div className="row">
            <div className="col-lg-6 content">
              <h3>Introducing the beta version of</h3>
              <h1>Yeeet It Out!</h1>
              <h3>Lorem ipsum dolor sit amet</h3>
              <div className="download-group">
                <button className="btn primary">Download</button>
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
      </div>
    );
  }
}

function App() {
  return <Home />;
}

export { App };
