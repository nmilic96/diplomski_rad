import React, { useState, useEffect } from 'react';

const ComplexData = () => {
	const [ data, setData ] = useState(null);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then(
			(json) => setData(json),
			(error) => {
				setError(error);
			}
		);
	}, []);

	useEffect(
		() => {
			console.log(data);
		},
		[ data ]
	);

	const mapData = (items) => {
		return items.map((item, index) => {
			return (
				<li key={index}>
					<h4>{item.title}</h4>
					<p>{item.body}</p>
				</li>
			);
		});
	};

	if (data) {
		return <ul>{mapData(data)}</ul>;
	} else {
		return <div>Loading</div>;
	}
};

export default ComplexData;
