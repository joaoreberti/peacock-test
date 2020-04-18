import React from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    background: '#fff',
     disableAlpha: false,
     visibile: true
   };

   save = () =>{
    this.setState({visibile : false})

   } 

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
        <div>
            {this.props.visibile && <ChromePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />}
      {/* <button onClick={this.save}>Save</button> */}
      </div>
    );
  }
}

export default ColorPicker