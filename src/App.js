import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownMenu from "./components/DropDownMenu/dropDown";

class App extends Component {
  state = {
    colorText: "black",
    backgroundColor: "white",
  };

  handleColors = (hex, isText) => {
    if (isText) {
      this.setState({ colorText: hex });
    } else {
      this.setState({ backgroundColor: hex });
    }
  };

  render() {
    const { colorText, backgroundColor } = this.state;
    return (
      <>
        <DropdownMenu
          handleColors={this.handleColors(colorText, backgroundColor)}
        />
        <div style={{ colorText, backgroundColor }}></div>
      </>
    );
  }
}

export default App;
