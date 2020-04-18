import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownMenu from "./components/DropDownMenu/dropDown";
import TextComponent from "./components/TextComponet/TextComponent"
import PubSub from 'pubsub-js'

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
      PubSub.subscribe('changeColor',function (msg,data){
      console.log(msg, data)
      })
      // this.setState({colorText:color.hex})
    const { colorText, backgroundColor } = this.state;
    return (
      <>
        <DropdownMenu
          handleColors={() => this.handleColors(colorText, backgroundColor)}
        />
        <div style={{ colorText, backgroundColor }}> <TextComponent></TextComponent>
</div>
      </>
    );
  }
}

export default App;
