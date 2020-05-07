import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PubSub from "pubsub-js";
import "./TextChangeComponent.css";

class TextChangeComponent extends Component {
  constructor() {
    super();
    this.state = {
      show: "hidden",
      visibile: false,
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: 24,
      textToChange: "fontWeight",
      buttonToshow: "textChange",
    };
    this.keydown = this.keydown.bind(this);
    this.showTextToChange = this.showTextToChange.bind(this);
    this.shiftCFunc = this.shiftCFunc.bind(this);
  }

  componentDidUpdate() {
    if (this.state.show === "visible") {
      window.addEventListener("keydown", this.keydown);
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.shiftCFunc, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.shiftCFunc, false);
  }

  keydown = (event) => {
    let fontWeight = this.state.fontWeight;
    let fontStyle = this.state.fontStyle;
    let textChange = this.state.textToChange;
    let size = this.state.fontSize;
    let buttonToShow = this.props.buttonToShow;

    if (buttonToShow === "textChange" && event.key === "ArrowLeft") {
      if (textChange === "fontWeight") {
        this.setState({ textToChange: "fontSize" });
      } else if (textChange === "fontSize") {
        this.setState({ textToChange: "fontStyle" });
      } else if (textChange === "fontStyle") {
        this.setState({ textToChange: "fontWeight" });
      }
    }
    if (buttonToShow === "textChange" && event.key === "ArrowRight") {
      if (textChange === "fontWeight") {
        this.setState({ textToChange: "fontStyle" });
      } else if (textChange === "fontStyle") {
        this.setState({ textToChange: "fontSize" });
      } else if (textChange === "fontSize") {
        this.setState({ textToChange: "fontWeight" });
      }
    }
    if (
      buttonToShow === "textChange" &&
      event.key === "ArrowUp" &&
      textChange === "fontSize"
    ) {
      size++;
      this.setState({ fontSize: size });
    }
    if (
      buttonToShow === "textChange" &&
      event.key === "ArrowDown" &&
      textChange === "fontSize"
    ) {
      size--;
      this.setState({ fontSize: size });
    }
    if (
      (event.key === "ArrowUp" || event.key === "ArrowDown") &&
      buttonToShow === "textChange"
    ) {
      if (textChange === "fontWeight" && fontWeight === "normal") {
        this.setState({ fontWeight: "bold" });
      } else if (textChange === "fontWeight" && fontWeight === "bold") {
        this.setState({ fontWeight: "normal" });
      }
      if (textChange === "fontStyle" && fontStyle === "normal") {
        this.setState({ fontStyle: "italic" });
      } else if (textChange === "fontStyle" && fontStyle === "italic") {
        this.setState({ fontStyle: "normal" });
      }
      PubSub.publish("textChange", {
        fontStyle: this.state.fontStyle,
        fontWeight: this.state.fontWeight,
        fontSize: this.state.fontSize,
      });
    }
  };

  showTextToChange = (show) => {
    if (this.props.buttonToShow === "textChange") {
      if (show === "visible") {
        this.setState({
          show: "hidden",
          visibile: false,
          buttonToshow: "textChange",
        });
        // window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
        return;
      } else {
        this.setState({
          show: "visible",
          visibile: true,
          buttonToshow: "textChange",
        });
        // window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
        return;
      }
    } else if (this.props.buttonToShow !== "textChange") {
      if (show === "hidden") {
        this.setState({
          show: "visible",
          visibile: true,
          buttonToshow: "textChange",
        });
        // window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
        // return
      }
      this.setState({
        show: "visible",
        visibile: true,
        buttonToshow: "textChange",
      });
      // window.removeEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
      // return
    } else {
      this.setState({
        show: "hidden",
        visibile: false,
      });
      // window.removeEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    }
    // if (
    //   this.state.show === "hidden" &&
    //   this.props.buttonToShow === "textChange"
    // ) {
    //   this.setState({
    //     show: "visible",
    //     buttonToshow: "textChange",
    //   });
    //   window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    // } else if (
    //   this.state.show === "visible" &&
    //   this.props.buttonToShow === "textChange"
    // ) {
    //   this.setState({
    //     show: "hidden",
    //   });
    //   window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    // } else
    //   this.setState({
    //     show: "hidden",
    //   });

    // window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
    PubSub.publish("showColorPicker", {
      buttonToshow: this.state.buttonToshow,
    });
  };

  shiftCFunc = (event) => {
    console.log("clicked space");
    if (event.keyCode === 32) {
      //Do whatever when esc is pressed
      this.showTextToChange(this.state.show);
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
          onClick={() => this.showTextToChange(this.state.show)}
        >
          Change Fonts(Space)
        </Button>
        {this.state.show === "visible" &&
        this.props.buttonToShow === "textChange" ? (
          <div className="textChangeDiv">
            Changing {this.state.textToChange}!<p>To change diferent font<br/>
            styles press <i className="arrow left"></i> or <i className="arrow right"></i> </p>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}

export default TextChangeComponent;
