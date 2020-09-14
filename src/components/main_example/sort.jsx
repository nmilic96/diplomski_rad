import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { unstable_trace as trace } from 'scheduler/tracing';

function Sort(props) {
	const [ sortType, setSortType ] = useState({
		type: 'id',
		value: false
	});

	useEffect(
		() => {
			let posts = [ ...props.data ];

			if (sortType.type === 'id') {
				sortType.value ? posts.sort((a, b) => a.id - b.id) : posts.sort((a, b) => b.id - a.id);
			} else {
				sortType.value
					? posts.sort((a, b) => a.title.localeCompare(b.title))
					: posts.sort((a, b) => b.title.localeCompare(a.title));
			}

			props.setData(posts);
		},
		[ sortType ]
	);

	const sortById = () => {
		trace('Sort list by id', performance.now(), () => {
			setSortType({
				type: 'id',
				value: !sortType.value
			});
		});
	};

	const sortByAlphabet = () => {
		trace('Sort list by alphabet', performance.now(), () => {
			setSortType({
				type: 'letter',
				value: !sortType.value
			});
		});
	};

	return (
		<div className="sort">
			<div>
				Poredak:&nbsp;
				<strong>
					{sortType.type === 'letter' ? (
						<span>{sortType.value ? <span>A-Ž</span> : <span>Ž-A</span>}</span>
					) : (
						<span>{sortType.value ? <span>1-10</span> : <span>10-1</span>}</span>
					)}
				</strong>
			</div>
			<div>
				<button
					className={`btn btn--sort ${sortType.type === 'letter' ? 'btn--active' : ''}`}
					onClick={() => {
						sortByAlphabet();
					}}
				>
					Abecedno
				</button>
				<button
					className={`btn btn--sort ${sortType.type === 'id' ? 'btn--active' : ''}`}
					onClick={() => {
						sortById();
					}}
				>
					Prema starosti
				</button>
			</div>
		</div>
	);
}

export default React.memo(Sort);
