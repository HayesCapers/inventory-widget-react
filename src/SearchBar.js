import React, { Component } from 'react'

class SearchBar extends Component{
	
	render(){
		return(
			<div className='search-bar-wrapper'>
				<form className="search-bar">
					<input type="text" placeholder="Search..." />
					<div>
						<input type="checkbox" />&nbsp;Only show products in stock
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;