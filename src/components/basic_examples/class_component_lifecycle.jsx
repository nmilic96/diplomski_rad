import React, { Component } from 'react';

class ClassComponentLifecycle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	render() {
		if (this.state.mounted) {
			return (
				<div className="component">
					<h3>Primjer 3: Životni ciklus klasne komponente</h3>
					<p>status - komponenta je učitana</p>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default ClassComponentLifecycle;
