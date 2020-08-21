import React, { Component } from 'react';
import SubComponent from './subcomponent';

class NestedComponentExample extends Component {
	render() {
		return (
			<div className="component">
				<h3>Komponenta sa ugniježđenom podkomponetom</h3>
				<SubComponent parent={'Class komponenta'}/>
			</div>
		);
	}
}

export default NestedComponentExample;