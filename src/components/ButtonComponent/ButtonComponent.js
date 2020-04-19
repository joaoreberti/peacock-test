import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./ButtonComponent.css";

class ButtonComponent extends Component {
  state = {
    show: "hidden",
    visibile: false,
  };

  showColorPicker = (show) => {
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
        <Button
          className="m-2"
          onClick={() => this.showColorPicker(this.state.show)}
        >
          {this.props.color}
        </Button>
        <div
          style={{
            visibility: this.state.show,
          }}
        >
          <ColorPicker visibile={this.state.visibile} isText={this.props.color}>
            <Button onClick={this.close}>Close</Button>
          </ColorPicker>
        </div>
      </>
    );
  }
}

export default ButtonComponent;
