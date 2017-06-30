import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'

class FilterableProductTable extends Component{
	constructor(props) {
		super(props);
		this.products = props.products
	}
	render(){

		return(
			<div className="filterable-product-table col-sm-3 col-sm-offset-4">
				<SearchBar />
				<ProductTable products={this.products} />
			</div>
		)
	}	
}

export default FilterableProductTable;