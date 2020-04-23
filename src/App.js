import React, { Component } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import TextComponent from "./components/TextComponet/TextComponent";
import PubSub from "pubsub-js";
import ButtonSecond from "./components/ButtonComponent/ButtonSecond"

class App extends Component {
  state = {
    colorText: "black",
    backgroundColor:"rgb(142,27,27)",
    keyPressedBackgroundColor: false,
    keyPressedTextColor: false,
    buttonShowBackGround:false,
    buttonShowColor:false
  };

  componentDidMount() {
    window.addEventListener('keydown', (e)=>{
      if ((e.shiftKey && e.keyCode === 98) || (e.shiftKey && e.keyCode === 66)) {
        this.setState({keyPressedBackgroundColor:!this.state.keyPressedBackgroundColor})

      }
      if ((e.shiftKey && e.keyCode === 116)||(e.shiftKey && e.keyCode === 84)) {
        this.setState({keyPressedTextColor:!this.state.keyPressedTextColor})  
      }
    } );

    PubSub.subscribe("showColorPicker", (msg, data) => {
      this.setState({
        buttonToShow:data.buttonToshow
      })
    });



    PubSub.subscribe("colorChange", (msg, data) => {
      if (data.isText === "color") {
        this.setState({
          colorText: data.color.hex,
        });
      } else {
        this.setState({
          backgroundColor: data.color.hex,
        });
      }
    });
    
    PubSub.subscribe("keyboardChange", (msg, data) => {
      if (data.isText === "color") {
        this.setState({
          colorText: `rgb(${data.color.r},${data.color.g},${data.color.b}`,
        });
      } else {
        this.setState({
          backgroundColor: `rgb(${data.color.r},${data.color.g},${data.color.b}`,
        });
      }
    });
  }

  componentWillUnmount(){
    PubSub.unsubscribeAll();

  }

  //Não aparenta ser necessário o unmount
 /*  componentWillUnmount() {
    console.log('unmount--------------')
    window.removeEventListener("keydown",(e)=>{});
  } */
  handleScroll(e) {
    console.log('scroll event');
    console.log(e);
  }

  //eventlistener fica na janela, no component did mount, e não fica só na DIV
 /*  handleKey = (e) => {
    if ((e.shiftKey && e.keyCode === 98) || (e.shiftKey && e.keyCode === 66)) {
    this.setState({keyPressedBackgroundColor:!this.state.keyPressedBackgroundColor})}
    if ((e.shiftKey && e.keyCode === 116)||(e.shiftKey && e.keyCode === 84)) {
      this.setState({keyPressedTextColor:!this.state.keyPressedTextColor})  
    }
    } */
    
  render() {
    const backgroundColorProp = "backgroundColor";
    const backgroundColorTitle = "Background Color";
    const colorProp = "color";
    const colorTitle = "Color";

    return (
      <div/*  tabIndex={-1} onKeyDown={(event) => this.handleKey(event)} */>
        <div
          className="displayText"
          style={{
            backgroundColor: this.state.backgroundColor,
            color: this.state.colorText,
          }}
        >
          <div
            style={{
              backgroundcolor: this.state.backgroundColor,
              color: this.state.colorText,
            }}
          >
            <TextComponent color={this.state.colorText}></TextComponent>
          </div>
        </div>
        <div className="divButtonBackgroundColor">
          <ButtonComponent
            color={backgroundColorProp}
            title={backgroundColorTitle}
            keyPressedBackgroundColor={this.state.keyPressedBackgroundColor}
            buttonToShow={this.state.buttonToShow}
          />
        </div>
        <div className="divButtonColor">
          <ButtonSecond
            color={colorProp}
            title={colorTitle}
            keyPressedTextColor={this.state.keyPressedTextColor}
            buttonToShow={this.state.buttonToShow}
            // buttonOpenText={this.state.buttonOpenText}
            // buttonOpenBackground={this.state.buttonOpenBackground}
          />
        </div>
      </div>
    );
  }
}

export default App;
