import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.min.css";

import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Download from "./js/pages/Download";
import Landing from "./js/pages/Landing";
import LegalNotice from "./js/pages/LegalNotice";
import ReactDOM from "react-dom";
import ScrollToTop from "./js/assets/ScrollToTop";
import reportWebVitals from "./js/reportWebVitals";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/download-app" component={Download}></Route>
            <Route path="/LegalNotice" component={LegalNotice}></Route>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

reportWebVitals();
