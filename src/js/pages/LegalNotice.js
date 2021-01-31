import "../../css/personal.min.css"

import { Component } from "react";
import Footer from "../assets/footer";
import { Helmet } from "react-helmet";
import Navbar from "../assets/navbar";
import personal from "../../config/personal.json";

class LegalNotice extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: personal.contact };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Legal Notice</title>
        </Helmet>
        <Navbar />
        <div className="ln impry">
          <div className="container_2">
            <h1>Legal Notice</h1>
            <div className="ln__inner">
              <p className="mb-5">
                Information in accordance with §5 of the E-Commerce Act, §14 of
                the Unternehmensgesetzbuch, §63 of the Commercial Code and
                disclosure requirements under §25 of the Media Act.
              </p>
              <p className="mb-2">
                {this.state.contact.firstname} {this.state.contact.lastname}
              </p>

              <p>
                {this.state.contact.address},<br></br>{" "}
                {this.state.contact.addressAdditional},<br></br>
                {this.state.contact.plz} {this.state.contact.city},<br></br>
                {this.state.contact.country}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LegalNotice;
