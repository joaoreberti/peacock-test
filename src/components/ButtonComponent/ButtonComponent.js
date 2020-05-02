import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./ButtonComponent.css";
import PubSub from "pubsub-js";

class ButtonComponent extends Component {
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
    /* if (this.props.buttonToShow !== prevProps.buttonToShow) {
      this.showColorPickerKeyboard();
    } */
   /*  if (
      this.props.keyPressedBackgroundColor !==
      prevProps.keyPressedBackgroundColor
    ) {
      this.showColorPickerKeyboard();
    } */
  }

  showColorPicker = (show) => {
    PubSub.publish("showColorPicker", {
      buttonToshow: this.props.color,
    });
    if (this.props.buttonToShow !== "backgroundColor" || this.props.buttonToShow=== null) {

      if (show === "hidden") {
        console.log('show background color picker function')

        this.setState({
          show: "visible",
          visibile: true,
        });
        window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
      }
    } else if (
      this.props.buttonToShow === "backgroundColor" &&
      this.state.show === "hidden"
    ) {


      this.setState({
        show: "visible",
        visibile: true,
      });
      window.removeEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    } else {
      PubSub.publish("showColorPicker", {
        buttonToshow: null,
      });
      this.setState({
        show: "hidden",
        visibile: false,
      });
      window.removeEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    }
  };

  shiftCFunc = (event) => {
    if (event.keyCode === 17) {
      //Do whatever when esc is pressed
      this.showColorPicker(this.state.show);
    }
  };

  // showColorPickerKeyboard = () => {
  //   console.log("função showColorPicker chamada outra vez");

  //   if (
  //     this.props.keyPressedBackgroundColor === true ||
  //     this.props.keyPressedTextColor === true
  //   ) {
  //     this.setState({
  //       show: "visible",
  //       visibile: true,
  //     });
  //   } else
  //     this.setState({
  //       show: "hidden",
  //       visibile: false,
  //     });
  // };

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
          {this.props.title}(Ctrl)
        </Button>
        <div>
          {this.props.buttonToShow === "backgroundColor" &&
          this.state.show === "visible" ? (
            <ColorPicker
            rgb = {this.props.rgb}
              visibile={this.state.visibile}
              isText={this.props.color}
              show={this.state.show}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default ButtonComponent;
