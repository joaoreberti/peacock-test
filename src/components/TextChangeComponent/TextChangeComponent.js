import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PubSub from "pubsub-js";

class TextChangeComponent extends Component {
  constructor() {
    super();
    this.state = {
      show: "hidden",
      visibile: false,
      buttonOpenText: false,
      buttonOpenBackground: false,
    };
    this.showColorPicker = this.showColorPicker.bind(this);
    this.shiftCFunc = this.shiftCFunc.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.shiftCFunc, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.shiftCFunc, false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.keyPressedTextColor !== prevProps.keyPressedTextColor) {
      this.showColorPickerKeyboard();
    }
    if (
      this.props.keyPressedBackgroundColor !==
      prevProps.keyPressedBackgroundColor
    ) {
      this.showColorPickerKeyboard();
    }
  }

  showColorPicker = (show) => {
    PubSub.publish("showColorPicker", {
      buttonToshow: this.props.color,
    });
    if (this.state.show === "hidden") {
      this.setState({
        show: "visible",
      });
      window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    } else
      this.setState({
        show: "hidden",
      });
    window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
  };

  shiftCFunc = (event) => {
    if (event.keyCode === 91) {
      //Do whatever when esc is pressed
      this.showColorPicker();
    }
  };

  showColorPickerKeyboard = () => {
    console.log("função showColorPicker chamada outra vez");
    if (
      this.props.keyPressedBackgroundColor === true ||
      this.props.keyPressedTextColor === true
    ) {
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

  render() {
    return (
      <div
        // This will provide access to DOM nodes.
        ref={(node) => {
          this.node = node;
        }}
      >
        <Button
          className="m-2"
          onClick={() => this.showColorPicker(this.state.show)}
        >
          Change Fonts
        </Button>
        {this.state.show === "visible" ? 
        <div>hello</div> : <div> bye</div>}
      </div>
    );
  }
}

export default TextChangeComponent;
