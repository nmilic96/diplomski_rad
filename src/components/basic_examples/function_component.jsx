import React from 'react'

function FunctionComponent() {
	console.log('render - funkcijska komponenta')
	return (
		<div className="component">
			<h3>Function komponenta</h3>
			<p>Ovo je komponenta vrste Class</p>
		</div>
	)
}

export default FunctionComponent
