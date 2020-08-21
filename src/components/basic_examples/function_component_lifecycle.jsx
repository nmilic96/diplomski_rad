import React, { useState } from 'react';
import { useEffect } from 'react';

function FunctionComponentLifecycle() {
	const [ mounted, setMounted ] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) {
		return (
			<div className="component">
				<h3>Primjer 4: Životni ciklus funkcijske komponente</h3>
				<p>status - komponenta je učitana</p>
			</div>
		);
	} else {
		return null
	}
}

export default FunctionComponentLifecycle;
