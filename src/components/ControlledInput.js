// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (
      <form >
      <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
      <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    );
  }
}

export default ControlledInput;
