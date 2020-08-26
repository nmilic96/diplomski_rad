import React, { PureComponent } from 'react';

class Notif extends PureComponent {

	componentDidUpdate() {
		setTimeout(() => {
			this.props.setShowNotif(false);
		}, 3000);
	}

	render() {
		if (this.props.show) {
			return <div style={{background: this.props.color}} className="notif">{this.props.text}</div>;
		} else {
			return null;
		}
	}
}

export default Notif;
