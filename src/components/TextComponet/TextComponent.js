import React, { Component } from "react";
import "./TextComponent.css";
import { Button } from "react-bootstrap";

class TextComponent extends Component {
  defaultText = `Lorem ipsum dolor sit amet, est mollis sollicitudin laoreet
  dictumst, per dignissim malesuada ipsum, auctor arcu vel mi, tortor
 `;

  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.defaultText,
      // bold:,             fontWeight:"bold",
      // italic :          font-style: italic;
      //size :   font-size: 15px;

    };
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };
  clearText=()=>{
    this.setState({inputValue: ""})
  }
  render() {
    return (
      <>
        <div className="displayText" style={{
            backgroundColor: this.props.backgroundColor,
            color: this.props.colorText,
            fontWeight:"bold",
            fontStyle:"italic",
            fontSize: "15px"
          }}>
            helloasdjnasjdnasjdnkln
          {/* <h1 style={{ color: this.props.colorText }}>{this.state.inputValue}</h1>
          <h2 style={{ color: this.props.colorText }}>{this.state.inputValue}</h2>
          <h3 style={{ color: this.props.colorText }}>{this.state.inputValue}</h3>
          <h4 style={{ color: this.props.colorText }}>{this.state.inputValue}</h4>
          <h5 style={{ color: this.props.colorText }}>{this.state.inputValue}</h5>
          <p style={{ color: this.props.colorText }}>{this.state.inputValue}</p>
          <p style={{ color: this.props.colorText }}><b>{this.state.inputValue}</b></p>
          <p style={{ color: this.props.colorText }}><i>{this.state.inputValue}</i></p> */}



        </div>
        <div className="textComponent">
        <input
          className="form-control"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          id="textValue"
        />
        <Button onClick={this.clearText}>Clear Text</Button>
      </div>
      </>
    );
  }
}

export default TextComponent;
