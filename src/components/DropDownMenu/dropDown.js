import React from "react";
import { Dropdown } from "react-bootstrap";
import ColorPicker from "../ColorPicker";
class DropdownMenu extends React.Component {
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
  save = () => {
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
              onClick={() => this.showColorPicker(this.state.show)}
            >
              Text Color
            </Dropdown.Item>
            <Dropdown.Item>Color Background</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div
          style={{
            visibility: this.state.show,
          }}
        >
          <ColorPicker visibile={this.state.visibile}></ColorPicker>
          <button onClick={this.save}>Close</button>
        </div>
      </>
    );
  }
}

export default DropdownMenu;
