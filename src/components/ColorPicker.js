import React from 'react';
import { ChromePicker } from 'react-color';
import PubSub from 'pubsub-js';

class ColorPicker extends React.Component {
  state = {
    background: '#fff',
    isText : this.props.isText
   };

   save = () =>{
    this.setState({visibile : false})

   } 

  handleChangeComplete = (color) => {

    PubSub.publish('colorChange',{color: color , isText: this.state.isText})

    this.setState({ background: color.hex });

  };

  render() {
    return (
        <div>
            {this.props.visibile && <ChromePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />}
      </div>
    );
  }
}

export default ColorPicker