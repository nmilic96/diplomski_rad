import React, { PureComponent } from 'react';

class Search extends PureComponent {
	handleInput = (e) => {
		let posts = JSON.parse(localStorage.getItem('data'));
		let searchTerm = e.target.value.toLowerCase().trim();
		let filteredPosts = posts.filter(
			(item) => item.title.toLowerCase().includes(searchTerm) || item.body.toLowerCase().includes(searchTerm)
		);
		this.props.setData(filteredPosts);
	};

	render() {
		return (
			<form className="search">
				<input
					type="text"
					placeholder="Pretraživanje"
					className="search__input"
					onChange={(e) => {
						this.handleInput(e);
					}}
				/>
			</form>
		);
	}
}

export default Search;
