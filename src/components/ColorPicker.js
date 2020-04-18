import React from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends React.Component {
<<<<<<< HEAD
    state = {
        background: '#fff',
        disableAlpha: false,
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return ( <
            ChromePicker color = { this.state.background }
            onChangeComplete = { this.handleChangeComplete }
            />
        );
    }
=======
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
            {this.state.visibile && <ChromePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />}
      <button onClick={this.save}>Save</button>
      
      </div>
    );
  }
>>>>>>> bedd31863d5a3273fba762f835cc6474953fd1d3
}

export default ColorPicker