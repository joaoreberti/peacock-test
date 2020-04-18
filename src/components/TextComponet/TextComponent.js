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
<<<<<<< HEAD
       <p style={{color:this.props.colorText}}>{this.state.inputValue}</p>
=======
        <p>{this.state.inputValue}</p>
>>>>>>> e44cca869fd6135853e845c7c95dc26d68d58383
      </>
    );
  }
}

export default TextComponent;
