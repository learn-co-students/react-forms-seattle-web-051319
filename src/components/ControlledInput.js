import React, {Component} from 'react';

class ControlledInput extends Component {
  state = {
    firstName: "",
    lastName: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" onChange={event => this.handleChange(event)} name="firstName" value={this.state.firstName} />
        <input type="text" onChange={event => this.handleChange(event)} name="lastName" value={this.state.lastName} />
      </form>
    )
  }
}

export default ControlledInput