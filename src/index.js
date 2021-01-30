import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import reportWebVitals from "./js/reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.min.css";
import Landing from "./js/pages/Landing";
import Download from "./js/pages/Download";
import LegalNotice from "./js/pages/LegalNotice";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/download-app" component={Download}></Route>

          <Route path="/LegalNotice" component={LegalNotice}></Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

reportWebVitals();
