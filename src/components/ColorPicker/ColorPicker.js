import React, { Component } from "react";
import { BlockPicker } from "react-color";
import PubSub from "pubsub-js";
import "./ColorPicker.css";

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      background: { r: 142, g: 27, b: 27, a: 1 },
      colorToChange: "red",
    };
    this.keydown = this.keydown.bind(this);
  }

  componentWillMount() {
    console.log("will mount");
    console.log(this.props.rgb);
    let rgb = this.props.rgb;
    rgb = rgb.slice(4, rgb.length - 1);
    rgb = rgb.split(",");

    this.setState({ background: { r: rgb[0], g: rgb[1], b: rgb[2], a: 1 } });
  }
  componentDidMount() {
    if (this.props.show === "visible") {
      window.addEventListener("keydown", this.keydown);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.keydown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.show === "visible" &&
      prevState.background !== this.state.background
    ) {
      window.addEventListener("keydown", this.keydown.bind(this));
    }
    if (prevState.background !== this.state.background) {
    }
  }

  keydown = (event) => {
    let color = this.state.background;
    if (event.key === "ArrowLeft") {
      if (this.state.colorToChange === "red") {
        this.setState({ colorToChange: "blue" });
      } else if (this.state.colorToChange === "blue") {
        this.setState({ colorToChange: "green" });
      } else if (this.state.colorToChange === "green") {
        this.setState({ colorToChange: "red" });
      }
    }
    if (event.key === "ArrowRight") {
      if (this.state.colorToChange === "red") {
        this.setState({ colorToChange: "green" });
      } else if (this.state.colorToChange === "green") {
        this.setState({ colorToChange: "blue" });
      } else if (this.state.colorToChange === "blue") {
        this.setState({ colorToChange: "red" });
      }
    }
    if (
      event.key === "ArrowDown" &&
      this.state.colorToChange === "red" &&
      color.r > 0
    ) {
      color.r--;
    } else if (
      event.key === "ArrowUp" &&
      this.state.colorToChange === "red" &&
      color.r < 255
    ) {
      color.r++;
    } else if (
      event.key === "ArrowDown" &&
      this.state.colorToChange === "green" &&
      color.g > 0
    ) {
      color.g--;
    } else if (
      event.key === "ArrowUp" &&
      this.state.colorToChange === "green" &&
      color.g < 255
    ) {
      color.g++;
    } else if (
      event.key === "ArrowDown" &&
      this.state.colorToChange === "blue" &&
      color.b > 0
    ) {
      color.b--;
    } else if (
      event.key === "ArrowUp" &&
      this.state.colorToChange === "blue" &&
      color.b < 255
    ) {
      color.b++;
    }

    if (event.key === "1") {
      color.r = 217;
      color.g = 227;
      color.b = 240;
    } else if (event.key === "2"){
      color.r = 244;
      color.g = 115;
      color.b = 115;
    }else if (event.key === "3"){
      color.r = 105;
      color.g = 118;
      color.b = 137;
    }else if (event.key === "4"){
      color.r = 55;
      color.g = 214;
      color.b = 122;
    }else if (event.key === "5"){
      color.r = 44;
      color.g = 204;
      color.b = 228;
    }else if (event.key === "6"){
      color.r = 85;
      color.g = 85;
      color.b = 85;
    }else if (event.key === "7"){
      color.r = 220;
      color.g = 231;
      color.b = 117;
    }else if (event.key === "8"){
      color.r = 255;
      color.g = 138;
      color.b = 101;
    }else if (event.key === "9"){
      color.r = 186;
      color.g = 104;
      color.b = 200;
    };
    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "1"||
      event.key === "2"||
      event.key === "3"||
      event.key === "4"||
      event.key === "5"||
      event.key === "6"||
      event.key === "7"||
      event.key === "8"||
      event.key === "9"
    ) {
      PubSub.publish("keyboardChange", {
        color: color,
        isText: this.props.isText,
        show: this.props.show,
      });
    }
    this.setState({ background: color });
  };

  handleChangeComplete = (color) => {
    PubSub.publish("colorChange", {
      color: color,
      isText: this.props.isText,
      show: this.props.show,
    });
    this.setState({ background: color.rgb });
  };

  render() {
    return (
      <>
        <div className="divPickerText">
          More{" "}
          <span
            style={{ background: this.state.colorToChange }}
            className="square"
          >
            &nbsp;
          </span>{" "}
          press <i className="arrow up"></i> Key.
          <p>
            To change the color <br />
            press <i className="arrow left"></i> or{" "}
            <i className="arrow right"></i>
          </p>
        </div>
        <div className="divPicker">
          {this.props.visibile && (
            <BlockPicker
              color={this.state.background}
              onChange={this.handleChangeComplete}
              isText={this.props.isText}
              colors={[
                "#D9E3F0",
                "#F47373",
                "#697689",
                "#37D67A",
                "#2CCCE4",
                "#555555",
                "#dce775",
                "#ff8a65",
                "#ba68c8",
              ]}
            />
          )}
        </div>
      </>
    );
  }
}

export default ColorPicker;
