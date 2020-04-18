import React from "react";
import { Dropdown } from "react-bootstrap";
import ColorPicker from "../ColorPicker";

class DropdownMenu extends React.Component {
  state = {
    show: "hidden",
    visibile: false,
    isText: true,
    isBackground: true,
  };

  showColorPicker = (show, isText) => {
    if (isText === true) {
      this.setState({
        isText: true,
        isBackground: false,
      });
    } else {
      this.setState({
        isText: false,
        isBackground: true,
      });
    }

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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Color
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => this.showColorPicker(this.state.show, true)}
            >
              Text Color
            </Dropdown.Item>
            <Dropdown.Item
<<<<<<< HEAD
              onClick={() => this.showColorPicker(this.state.show)}
=======
              onClick={() => this.showColorPicker(this.state.show, false)}
>>>>>>> 572735ecad8f01511475845fcbb94f8ef1651b20
            >
              Color Background
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div
          style={{
            visibility: this.state.show,
          }}
        >
          <ColorPicker
            visibile={this.state.visibile}
            isText={this.state.isText}
          ></ColorPicker>
          <button onClick={this.close}>Close</button>
        </div>
      </>
    );
  }
}

export default DropdownMenu;
