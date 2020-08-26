import React, { Component } from 'react'

export class PreventUpdateExample extends Component {

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.value !== this.props.value
	}

	render() {
		return (
			<div>
				vrijednost: {this.props.value}
			</div>
		)
	}
}

export default PreventUpdateExample
