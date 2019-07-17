import React, { Component } from "react";

export default class ControlledInput extends Component {
	
	constructor(){
		super();
		this.state = {
			firstName: "Enter first name",
			lastName: "Enter last name"
		};
	}
		
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.children[0].value, event.target.children[1].value);
	}
	
	render() {
		return (
			<form onSubmit={(event) => {this.handleSubmit(event)}}>
				<input type="text" 
							 name="firstName" 
							 value={this.state.firstName}
							 onChange={(event) => {this.handleChange(event)}}/>
				<input type="text" 
							 name="lastName" 
							 value={this.state.lastName}
							 onChange={(event) => {this.handleChange(event)}}/>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
	
}