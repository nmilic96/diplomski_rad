import React, { Component } from 'react';

class WhatNotToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: false 
		}
	}

	componentDidMount() {
		mounted = true 
	}
	
	render() {
		return (
			<div>
				
			</div>
		);
	}
}

export default WhatNotToDo;