import $ from "jquery";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGraduationCap,
  faDownload,
  faGamepad,
  faNewspaper,
  faHeadset,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  $code = () => {
    $(".menu-toggle").click(function (e) {
      if ($(this).hasClass("open") || $("body").hasClass("show-sidebar")) {
        $(this).removeClass("open");
        $("body").removeClass("show-sidebar");
      } else {
        $(this).addClass("open");
        $("body").addClass("show-sidebar");
      }

      e.preventDefault();
    });
  };

  componentDidMount() {
    this.$code();
  }

  render() {
    return (
      <nav className="navbar-expand navbar">
        <div className="collapse navbar-collapse">
          <div className="nav-wrapper">
            <span className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

class Sidenav extends Component {
  $code = (e) => {
    console.log(e);
  };

  componentDidMount() {
    this.$code();
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="side-inner">
          <div></div>
          <div className="nav-menu">
            <ul>
              <li className="active">
                <a href="#!">
                  <FontAwesomeIcon icon={faHome} />
                  Yeeet It Out!
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faDownload} />
                  Download
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  Learn more
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faBook} />
                  Documentation
                </a>
              </li>
            </ul>
            <hr className="m-0"></hr>
            <ul>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faGamepad} />
                  Games
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faNewspaper} />
                  News / Events
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faHeadset} />
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

class Header extends Component {
  componentDidMount() {
    $(".nav-backdrop").mouseup(() => {
      $(".menu-toggle").removeClass("open");
      $("body").removeClass("show-sidebar");
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="nav-backdrop" tabIndex="-1"></div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Sidenav />
      <Header />
    </div>
  );
}

export { App };
