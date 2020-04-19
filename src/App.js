import React, { Component } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import TextComponent from "./components/TextComponet/TextComponent";
import PubSub from "pubsub-js";

class App extends Component {
  state = {
    colorText: "black",
    backgroundColor: "white",
  };

  componentDidMount() {
    PubSub.subscribe("colorChange", (msg, data) => {
      if (data.isText === "color") {
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
        className="displayText"
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.colorText,
        }}
      >
        <div
          style={{
            backgroundcolor: this.state.backgroundColor,
            color: this.state.colorText,
          }}
        >
          <TextComponent color={this.state.colorText}></TextComponent>
        </div>
        <div className="divButtonBackgroundColor">
          <ButtonComponent color={"backgroundColor"} />
        </div>
        <div className="divButtonColor">
          <ButtonComponent color={"color"} />
        </div>
      </div>
    );
  }
}

export default App;
