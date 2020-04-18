import React, { Component } from "react";

class TextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  render() {
    return (
      <>
        <input
          className="form-control"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          id="textValue"
        />
       <p style={{color:this.props.colorText}}>{this.state.inputValue}</p>
      </>
    );
  }
}

export default TextComponent;
