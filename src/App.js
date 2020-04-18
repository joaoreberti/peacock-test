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
<<<<<<< HEAD
  componentDidMount() {
    PubSub.subscribe("colorChange", (msg, data) => {
      if (data.isText === true) {
        this.setState({
          colorText: data.color.hex,
        });
      } else {
        this.setState({
          backgroundColor: data.color.hex,
        });
      }
    });
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.colorText,
        }}
      >
        <DropdownMenu />
        <div
          style={{
            backgroundcolor: this.state.backgroundColor,
            color: this.state.colorText,
          }}
        >
          <TextComponent color={this.state.colorText}></TextComponent>
        </div>
      </div>
=======

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
>>>>>>> e44cca869fd6135853e845c7c95dc26d68d58383
    );
  }
}

export default App;
