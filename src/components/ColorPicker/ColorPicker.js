import React, { Component } from "react";
import { ChromePicker } from "react-color";
import PubSub from "pubsub-js";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    background: "#fff",
  };

  save = () => {
    this.setState({ visibile: false });
  };

  handleChangeComplete = (color) => {
    PubSub.publish("colorChange", { color: color, isText: this.props.isText });

    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div className="divPicker">
        {this.props.visibile && (
          <ChromePicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
            isText={this.props.isText}
          />
        )}
      </div>
    );
  }
}

export default ColorPicker;
