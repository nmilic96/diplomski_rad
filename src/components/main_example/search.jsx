import React, { PureComponent } from 'react';

class Search extends PureComponent {
	render() {
		return (
			<form className="search"><input type="text" placeholder="Pretraživanje" className="search__input" /></form>
		);
	}
}


export default Search;