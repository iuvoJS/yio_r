import { Component } from "react";
import personal from "../assets/personal.json";
import Navbar from "../assets/navbar";
import Footer from "../assets/footer";

class Imprint extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: personal.contact };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="imprint impry">
          <div className="container_2">
            <h1>Impressum</h1>
            <div className="imprint__inner">
              <p className="mb-2">
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

export default Imprint;
