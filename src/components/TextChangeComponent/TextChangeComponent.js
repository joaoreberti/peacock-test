import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PubSub from "pubsub-js";

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
    this.showColorPicker = this.showColorPicker.bind(this);
    this.shiftCFunc = this.shiftCFunc.bind(this);
  }

  //   fontWeight:"bold",
  //               fontStyle:"italic",
  //               fontSize: "15px"
  //   componentDidUpdate(prevProps) {
  //     if (this.props.keyPressedTextColor !== prevProps.keyPressedTextColor) {
  //       this.showColorPickerKeyboard();
  //     }
  //     if (
  //       this.props.keyPressedBackgroundColor !==
  //       prevProps.keyPressedBackgroundColor
  //     ) {
  //       this.showColorPickerKeyboard();
  //     }
  //   }
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
  //   componentDidMount() {
  //     if (this.state.show === "visible") {
  //       window.addEventListener("keydown", this.keydown);
  //     }
  //   }
  //   componentWillUnmount() {
  //     window.removeEventListener("keydown", this.keydown);
  //   }

  //               fontWeight:"bold",
  //             fontStyle:"italic",
  //             fontSize: "15px"
  keydown = (event) => {
    let fontWeight = this.state.fontWeight;
    let fontStyle = this.state.fontStyle;
    // let fontSize = this.state.fontSize;
    let textChange = this.state.textToChange;
    let size = this.state.fontSize;

    if (event.key === "ArrowLeft") {
      if (textChange === "fontWeight") {
        this.setState({ textToChange: "fontSize" });
      } else if (textChange === "fontSize") {
        this.setState({ textToChange: "fontStyle" });
      } else if (textChange === "fontStyle") {
        this.setState({ textToChange: "fontWeight" });
      }
    }
    if (event.key === "ArrowRight") {
      if (textChange === "fontWeight") {
        this.setState({ textToChange: "fontStyle" });
      } else if (textChange === "fontStyle") {
        this.setState({ textToChange: "fontSize" });
      } else if (textChange === "fontSize") {
        this.setState({ textToChange: "fontWeight" });
      }
    }
    if (event.key === "ArrowUp") {
      if (textChange === "fontSize") {
        size++;
        this.setState({ fontSize: size });
      }
    }
    if (event.key === "ArrowDown") {
      if (textChange === "fontSize") {
        size--;
        this.setState({ fontSize: size });
      }
    }
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
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

  showColorPicker = (show) => {
    if (this.props.buttonToShow !== "textChange") {
      if (this.state.show === "hidden") {
        this.setState({
          show: "visible",
          visibile: true,
          buttonToshow: "textChange",

        });
        window.addEventListener("click", this.handleOutsidePickerClose, false); // Window is like the document in react
        return
      }
    } else if(this.props.buttonToShow === "textChange" && this.state.show==="hidden") { 
      this.setState({
        show: "visible",
        visibile: true,
        buttonToshow: "textChange",
      });
      window.removeEventListener(
        "click",
        this.handleOutsidePickerClose,
        false
      ); // Window is like the document in react
      return
    } else {
      this.setState({
        show: "hidden",
        visibile: false,
      });
      window.removeEventListener(
        "click",
        this.handleOutsidePickerClose,
        false
      ); // Window is like the document in react
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
    if (event.keyCode === 32) {
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
          Change Fonts(Space)
        </Button>
        {this.state.show === "visible" &&
        this.props.buttonToShow === "textChange" ? (
          <div>Changing {this.state.textToChange}</div>
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}

export default TextChangeComponent;
