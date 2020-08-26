import React, { Component } from 'react';

class WhatToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			property: 1
		}
	}

	componentDidMount() {
		const state = this.state;
		const newState = {...state, {new_propery: 2}};
		this.setState(newState);
	}
	
	render() {
		return (
			<div>
				{this.state.property}
			</div>
		);
	}
}

export default WhatToDo;