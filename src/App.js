import React, { Component } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import TextComponent from "./components/TextComponet/TextComponent";
import PubSub from "pubsub-js";

class App extends Component {
  state = {
    colorText: "black",
    backgroundColor: "white",
    keyPressedBackgroundColor: false,
    keyPressedTextColor: false,
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

  handleKey = (e) => {
    if ((e.shiftKey && e.keyCode === 98) || (e.shiftKey && e.keyCode === 66)) {
    this.setState({keyPressedBackgroundColor:!this.state.keyPressedBackgroundColor})}
    if ((e.shiftKey && e.keyCode === 116)||(e.shiftKey && e.keyCode === 84)) {
      this.setState({keyPressedTextColor:!this.state.keyPressedTextColor})  
    }
    }
    
  render() {
    const backgroundColorProp = "backgroundColor";
    const backgroundColorTitle = "Background Color";
    const colorProp = "color";
    const colorTitle = "Color";

    return (
      <div tabIndex={-1} onKeyDown={(event) => this.handleKey(event)}>
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
        </div>
        <div className="divButtonBackgroundColor">
          <ButtonComponent
            color={backgroundColorProp}
            title={backgroundColorTitle}
            keyPressedBackgroundColor={this.state.keyPressedBackgroundColor}
          />
        </div>
        <div className="divButtonColor">
          <ButtonComponent
            color={colorProp}
            title={colorTitle}
            keyPressedTextColor={this.state.keyPressedTextColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
