import React, { Component } from 'react';

class WhatToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ['list_item'] 
		}
	}

	componentDidMount() {
		const list = this.state.list;
		const newList = [...list, ['new list item']];
		this.setState({list: newList});
	}
	
	render() {
		return (
			<div>
				{this.state.list.map((item, index) => {
					return <p key={index}>{item}</p>
				})}
			</div>
		);
	}
}

export default WhatToDo;