import React from 'react';

class ControlledInput extends React.Component {
  constructor () {
    super()
    this.state= {
      value: "some stuff "
    }
  }
  handleChange =(event) => {
    this.setState({
      value: event.target.value,
    });
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
        type="text"
        value= {this.state.value}
        onChange={this.handleChange}
        />

        <button type="submit" className="stingy-btn" >Submit for Our Consumption</button>

      </form>
    )
  }
}

export default ControlledInput;
