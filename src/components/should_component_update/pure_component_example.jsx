import React, { PureComponent } from 'react'

export class PureComponentExample extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				vrijednost: {this.props.value}
			</div>
		)
	}
}

export default PureComponentExample
