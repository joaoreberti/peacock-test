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
        <textarea
          class="form-control"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          id="textValue"
          rows="3"
        ></textarea>
      </>
    );
  }
}

export default TextComponent;
