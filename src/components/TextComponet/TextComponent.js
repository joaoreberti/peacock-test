import React, { Component } from "react";

class TextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Lorem ipsum",
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
        <div>
          <p>
            Lorem ipsum dolor sit amet, est mollis sollicitudin laoreet
            dictumst, per dignissim malesuada ipsum, auctor arcu vel mi, tortor
            quis urna tortor dictum faucibus accumsan. Consequat felis, lorem
            turpis orci, vulputate arcu eu quam nunc eget eget. Libero erat
            luctus semper curabitur massa gravida, metus duis, aliquam suscipit
            nunc ipsum donec, vitae sociis erat dictum cras nibh hendrerit. Odio
            ultricies, in id adipiscing in, nullam suspendisse varius, faucibus
            dapibus dapibus nunc sed lacus, mi lacus. At vivamus pellentesque id
            sapien hac arcu, id nunc pellentesque gravida sit, mauris
            suspendisse nunc non. Nisl augue ut consequat massa urna, aliquam id
            tempor morbi dictumst, at velit a sit et ut, sapien habitant,
            dignissim volutpat deserunt enim dis tortor. Nulla libero pede
            dolor, dictum nonummy luctus suscipit, senectus ullamcorper, eu
            pulvinar et volutpat in. Metus mattis venenatis, ut massa laoreet
            non, nam vel, at lacus libero hendrerit, aenean metus ultrices quam.
          </p>
        </div>
        <input
          className="form-control"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          id="textValue"
        />
        <p style={{ color: this.props.colorText }}>{this.state.inputValue}</p>
      </>
    );
  }
}

export default TextComponent;
