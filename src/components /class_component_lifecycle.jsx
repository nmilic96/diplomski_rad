import React, { Component } from 'react';

class KlasnaKomponentaLifeCycle extends Component {

	constructor() {
		super();
		this.state = {
			mounted: false
		}
	}

	componentDidMount() {
		this.setState({mounted: true})
	}

	render() {
		if (this.state.mounted) {
			return (
				<div>
					<h3>Klasna komponenta</h3>
					<p>status - Komponenta je učitana</p>
				</div>
			);
		} else {
			return <div>Učitavanje komponente</div>
		}
	}
}

export default KlasnaKomponentaLifeCycle;