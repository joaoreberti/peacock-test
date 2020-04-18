import React from "react";
import { Dropdown } from "react-bootstrap";

class DropdownMenu extends React.Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Color 
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item> Color text</Dropdown.Item>
          <Dropdown.Item onClick= {()=>alert("clicked")}>Color Background</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropdownMenu;
