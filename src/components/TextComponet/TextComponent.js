import React, { Component } from "react";
import "./TextComponent.css";
// import { Button } from "react-bootstrap";
import PubSub from "pubsub-js";


class TextComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "The quick brown fox jumps over the lazy dog ",
      fontWeight: "normal",
      fontStyle:"normal",
      fontSize:"24"

    };
  }

  componentDidMount(){
    PubSub.subscribe("textChange", (msg, data) => {
      console.log(data)
      this.setState({
        fontWeight:data.fontWeight,
        fontStyle:data.fontStyle,
        fontSize:data.fontSize
      })
    });
  }
  // updateInputValue = (evt) => {
  //   this.setState({
  //     inputValue: evt.target.value,
  //   });
  // };
  // clearText=()=>{
  //   this.setState({inputValue: ""})
  // }
  render() {
    return (
      <>
        <div className="displayText" style={{
            backgroundColor: this.props.backgroundColor,
            color: this.props.colorText,
            fontWeight:this.state.fontWeight,
            fontStyle:this.state.fontStyle,
            fontSize:this.state.fontSize + "px"
          }}>
            <h1 style={{fontSize:"92px"}}>What is Lorem Ipsum?</h1>
           <p> {this.state.inputValue} </p>
          {/* <h1 style={{ color: this.props.colorText }}>{this.state.inputValue}</h1>
          <h2 style={{ color: this.props.colorText }}>{this.state.inputValue}</h2>
          <h3 style={{ color: this.props.colorText }}>{this.state.inputValue}</h3>
          <h4 style={{ color: this.props.colorText }}>{this.state.inputValue}</h4>
          <h5 style={{ color: this.props.colorText }}>{this.state.inputValue}</h5>
          <p style={{ color: this.props.colorText }}>{this.state.inputValue}</p>
          <p style={{ color: this.props.colorText }}><b>{this.state.inputValue}</b></p>
          <p style={{ color: this.props.colorText }}><i>{this.state.inputValue}</i></p> */}
        </div>
        {/* <div className="textComponent">
        <input
          className="form-control"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          id="textValue"
        />
        <Button onClick={this.clearText}>Clear Text</Button>
      </div> */}
      </>
    );
  }
}

export default TextComponent;
