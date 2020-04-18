import React from "react";
import { Dropdown } from "react-bootstrap";
import ColorPicker from "../ColorPicker";
class DropdownMenu extends React.Component {
  state = {
    show: "hidden",
  };

  showColorPicker = (show) => {
    if (show === "hidden") {
      this.setState({
        show: "visible",
      });
    } else
      this.setState({
        show: "hidden",
      });
  };

  render() {
    return (
        <>
      <Dropdown >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Color
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item onClick={()=>this.showColorPicker(this.state.show)}>
              Text Color
          </Dropdown.Item >
          <Dropdown.Item onClick={()=>this.showColorPicker(this.state.show)}>Color Background</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{
                  visibility: this.state.show
                }}>
    <ColorPicker ></ColorPicker>
    </div>
</>
    );
  }
}

export default DropdownMenu;
