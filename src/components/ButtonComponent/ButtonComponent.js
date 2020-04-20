import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./ButtonComponent.css";

class ButtonComponent extends Component {
  constructor() {
    super();

    this.state = {
      show: "hidden",
      visibile: false,
    };

    this.showColorPicker = this.showColorPicker.bind(this);
    this.handleOutsidePickerClose = this.handleOutsidePickerClose.bind(this);
  }

  showColorPicker = () => {
    if (!this.state.visibile) {
      this.setState({
        show: "visible",
        visibile: true,
      });

      window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    } else {
      this.setState({
        show: "hidden",
        visibile: false,
      });

      window.removeEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    }
  };

  handleOutsidePickerClose(event) {
    // This is to ignore the click on the component picker.
    if (this.node.contains(event.target)) {
      return;
    }

    this.showColorPicker();
  }

  render() {
    return (
      <div
        // This will provide access to DOM nodes.
        ref={(node) => {
          this.node = node;
        }}
      >
        <Button className="m-2" onClick={this.showColorPicker}>
          {this.props.title}
        </Button>
        <div
          style={{
            visibility: this.state.show,
          }}
        >
          <ColorPicker
            visibile={this.state.visibile}
            isText={this.props.color}
          />
        </div>
      </div>
    );
  }
}

export default ButtonComponent;
