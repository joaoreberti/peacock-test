import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownMenu from "./components/DropDownMenu/dropDown";
import TextComponent from "./components/TextComponet/TextComponent";
import PubSub from "pubsub-js";

class App extends Component {
  state = {
    colorText: "black",
    backgroundColor: "white",
  };

  colorTextOrBackground = (hex, isText) => {
    if (isText) {
      this.setState({ colorText: hex });
    } else {
      this.setState({ backgroundColor: hex });
    }
  };

  handleColors = (hex, isText) => {
    this.colorTextOrBackground(hex, isText);
  };

  render() {
    PubSub.subscribe("colorChange", function (topic, res) {
      this.setState({ colorText: res.hex });
    });

    PubSub.unsubscribe("colorChange");

    const { colorText, backgroundColor } = this.state;
    return (
      <>
        <DropdownMenu
          handleColors={() => this.handleColors(colorText, backgroundColor)}
        />
        <div style={{ colorText, backgroundColor }}>
          {" "}
          <TextComponent></TextComponent>
        </div>
      </>
    );
  }
}

export default App;
