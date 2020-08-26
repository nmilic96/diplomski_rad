import React, { Component } from 'react';
import Loading from '../loading';

class ConditionalTernary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: false,
			list: []
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	render() {
		return (
			<div>
				{this.state.mounted && this.state.list.length > 0 ? 
					<div className="component">...</div> 
					: 
					<Loading />
				}
			</div>
		);
	}
}

export default ConditionalTernary;
