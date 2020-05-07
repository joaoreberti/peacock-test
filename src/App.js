import React, { Component } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import TextComponent from "./components/TextComponet/TextComponent";
import PubSub from "pubsub-js";
import ButtonSecond from "./components/ButtonComponent/ButtonSecond"
import Tooltip from "./components/tooltip/Tooltip"
import TextChangeComponent from "./components/TextChangeComponent/TextChangeComponent"

class App extends Component {
  state = {
    colorText: "rgb(255,255,255)",
    backgroundColor:"rgb(0,0,0)",
  };

  componentDidMount() {
    PubSub.subscribe("showColorPicker", (msg, data) => {
      this.setState({
        buttonToShow:data.buttonToshow
      })
    });
    PubSub.subscribe("colorChange", (msg, data) => {
      if (data.isText === "color") {
        this.setState({
          colorText: data.color.rgb,
        });
      } else {
        this.setState({
          backgroundColor: data.color.rgb,
        });
      }
    });
    PubSub.subscribe("keyboardChange", (msg, data) => {
      console.log("publish")
      if (data.isText === "color") {
        this.setState({
          colorText: `rgb(${data.color.r},${data.color.g},${data.color.b})`,
        });
      } else {
        this.setState({
          backgroundColor: `rgb(${data.color.r},${data.color.g},${data.color.b})`,
        });
      }
    });
  }

  componentWillUnmount(){
    PubSub.unsubscribeAll();
  }

  // handleScroll(e) {
  //   console.log('scroll event');
  //   console.log(e);
  // }

  render() {
    const backgroundColorProp = "backgroundColor";
    const backgroundColorTitle = "Background Color";
    const colorProp = "color";
    const colorTitle = "Color";
    let infoToDisplay = 0
    if(this.state.buttonToShow === 'color'){
      infoToDisplay = 1 
    }

    return (
      <div className='App'>
        <div className="header">Contrast Test Tool</div>
        <div
          className="wrap"
          // style={{
          //   backgroundColor: this.state.backgroundColor,
          //   color: this.state.colorText,
          // }}
        >
          <div className="containerForDisplayText"
            style={{
              backgroundcolor: this.state.backgroundColor,
              color: this.state.colorText,
            }}
          >
            <TextComponent color={this.state.colorText} backgroundColor={this.state.backgroundColor}></TextComponent>
          </div>
        </div>
        <div className="buttonsMenu">
        {/* <Tooltip infoToDisplay={infoToDisplay} /> */}

        <div className="divButtonBackgroundColor">
          <ButtonComponent
            rgb = {this.state.backgroundColor}
            color={backgroundColorProp}
            title={backgroundColorTitle}
            keyPressedBackgroundColor={this.state.keyPressedBackgroundColor}
            buttonToShow={this.state.buttonToShow}
          />
        </div>
        <div className="divButtonColor">
          <ButtonSecond
                      rgb = {this.state.colorText}

            color={colorProp}
            title={colorTitle}
            keyPressedTextColor={this.state.keyPressedTextColor}
            buttonToShow={this.state.buttonToShow}
          />
        </div>
        <TextChangeComponent buttonToShow={this.state.buttonToShow}></TextChangeComponent>
      </div>
      </div>
    );
  }
}

export default App;
