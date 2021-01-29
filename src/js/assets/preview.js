import { Component } from "react";
import platform from "platform";
import isMobile from "./isMobile";
import iPhone from "../../assets/svg/preview/phone/iphone.svg";
import Samsung from "../../assets/svg/preview/phone/samsung.svg";
import MacBook from "../../assets/svg/preview/laptop.svg";

console.log({Samsung, MacBook, iPhone, isMobile, platform})

class Preview extends Component {

  constructor (props) {
      super(props);
      let swap = platform.os.family;
      this.state = {
          source: MacBook,
          alt: `${swap} Preview`,
          element: "computer"
      }
  }

  componentDidMount() {
    let swap = platform.os.family;

    // If user is on a desktop
    if (!isMobile) {
      this.setState({
        source: MacBook,
        alt: `${swap} Preview`,
        element: "computer",
      });

      return;
    }

    switch (swap) {
      // If platform is an iPhone/iPod/etc
      case "iOS":
        this.setState({
          source: iPhone,
          alt: `${swap} Preview`,
          element: "ios",
        });
        break;

      default:
        this.setState({
          source: Samsung,
          alt: `${swap} Preview`,
          element: "samsung",
        });
        break;
    }
  }

  render() {
    return (
      <img
        src={this.state.source}
        alt={this.state.alt}
        className={this.state.element}
      ></img>
    );
  }
}

export default Preview;
