import React, { Component } from 'react';

class InteractionExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: false,
			clicks: 0
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	render() {
		if (this.state.mounted) {
			return (
				<div className="component">
					<h3>Klasna komponenta</h3>
					<p>status - Komponenta je učitana</p>
					<button onClick={() => {this.setState({clicks: this.state.clicks + 1})}}>Klikni me</button>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default InteractionExample;
