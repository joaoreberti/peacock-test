import React from 'react';
import { ChromePicker } from 'react-color';
import PubSub from 'pubsub-js'


class ColorPicker extends React.Component {
  state = {
    background: '#fff',
     disableAlpha: false,
     visibile: true,
     isText:false,
   };

   save = () =>{
    this.setState({visibile : false})

   } 

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    PubSub.publish('changeColor', color.hex);
  };

  render() {
    return (
        <div>
            {this.props.visibile && <ChromePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
        isText={this.props.isText}
      />}
      </div>
    );
  }
}

export default ColorPicker