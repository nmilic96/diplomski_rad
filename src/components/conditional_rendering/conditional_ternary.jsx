import React, { Component } from 'react';
import Loading from '../loading';

class ConditionalTernary extends Component {
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
		return (
			<div>
				{this.state.mounted ? 
					<div className="component">...</div> 
					: 
					<Loading />
				}
			</div>
		);
	}
}

export default ConditionalTernary;
