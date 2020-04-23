import React, { Component } from "react";
import { ChromePicker } from "react-color";
import PubSub from "pubsub-js";
import "./ColorPicker.css";

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      background: "",
      colorToChange: "red",
    };
  }
/* 
  save = () => {
    this.setState({ visibile: false });
  }; */

  componentDidMount() {
    if (this.props.show === "visible") {
      // window.addEventListener("keydown", this.keydown.bind(this));
    }
    window.addEventListener("keydown", this.keydown.bind(this));

  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("update");
    if (
      this.props.show === "visible" &&
      prevState.background !== this.state.background
    ) {
      window.addEventListener("keydown", this.keydown.bind(this));
    }
  }

  keydown = (event) => {
    console.log("entrou no keydown");
    
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
    this.setState({ background: color });
  };

  handleChangeComplete = (color) => {
    PubSub.publish("colorChange", {
      color: color,
      isText: this.props.isText,
      show: this.props.show,
    });
    // PubSub.publish("isVisible", {show:this.props.show });
    // console.log(color);
    this.setState({ background: color.rgb });
  };

  render() {
    return (
      <>
        <div>More {this.state.colorToChange} press Up Key.</div>

        <div className="divPicker">
          {this.props.visibile && (
            <ChromePicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
              isText={this.props.isText}
            />
          )}
        </div>
      </>
    );
  }
}

export default ColorPicker;
