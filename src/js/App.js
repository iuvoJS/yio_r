import $ from "jquery";
import { Component } from "react";
import platform from "platform";
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

    $(".nav-backdrop").mouseup(() => {
      $(".menu-toggle").removeClass("open");
      $("body").removeClass("show-sidebar");
    });
  };

  componentDidMount() {
    this.$code();
  }

  render() {
    return (
      <div>
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
        <div className="nav-backdrop" tabIndex="-1"></div>
      </div>
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
    console.log(platform.os.family)
  }

  render() {
    return (
      <header>
        <div className="container">
          <h1>Yeeet It Out!</h1>
          <div className="button-group">
            <a href="#!" className="btn btn-secondary">play demo</a>
            <a href="#!" className="btn btn-primary">get now</a>
          </div>
        </div>
      </header>
    );
  }
}

function App() {
  return (
    <div>
      <Sidenav />
      <Navbar />
      <Header />
    </div>
  );
}

export { App };
