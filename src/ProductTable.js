import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js'

class ProductTable extends Component{
	constructor(props) {
		super(props);
		this.products = props.products
	}

	render(){
		var rows = [];
		//Init a local var to keep track of what category we are on
		var lastCategory = "";
		var key = 0;
		this.products.map(function(currProduct, index){
			if(currProduct.category !== lastCategory){
				//we need to add this to our rows array becasue its a new cat
				rows.push(<ProductCategoryRow key={key} category={currProduct.category} />)
				lastCategory = currProduct.category;
				key++;
			}
			rows.push(<ProductRow key={key} randomThing={currProduct} />)
			key++;
			return 'farts';
		});
		return(
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

export default ProductTable;