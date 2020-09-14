import React, { useRef } from 'react';
import { debounce } from '../../functions/functions';

const Search = (props) => {
	const ref = useRef('');

	const handleInput = (e) => {
		if (ref.current) {
			let searchTerm = ref.current.value.toLowerCase().trim();
			let posts = JSON.parse(localStorage.getItem('data'));
			let filteredPosts = posts.filter(
				(item) => item.title.toLowerCase().includes(searchTerm) || item.body.toLowerCase().includes(searchTerm)
			);
			
			props.setData(filteredPosts);
		}
	};

	return (
		<form className="search">
			<input
				ref={ref}
				type="text"
				placeholder="Pretraživanje"
				className="search__input"
				onChange={debounce((e) => {
					handleInput(e)
				}, 220)}
			/>
		</form>
	);
};

export default React.memo(Search);
