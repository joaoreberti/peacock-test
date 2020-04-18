import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./ButtonComponent.css";

class ButtonComponent extends Component {
  state = {
    show: "hidden",
    visibile: false,
  };

  showColorPicker = (show, isText) => {
    if (show === "hidden") {
      this.setState({
        show: "visible",
        visibile: true,
      });
    } else
      this.setState({
        show: "hidden",
        visibile: false,
      });
  };
  close = () => {
    this.setState({ visibile: false, show: "hidden" });
  };

  render() {
    return (
      <>
        <Button onClick={() => this.showColorPicker(this.state.show)}>
          {this.props.color}
        </Button>
        <div
          style={{
            visibility: this.state.show,
          }}
        >
          <ColorPicker
            visibile={this.state.visibile}
            isText={this.props.color}
          ></ColorPicker>
          <button onClick={this.close}>Close</button>
        </div>
      </>
    );
  }
}

export default ButtonComponent;
