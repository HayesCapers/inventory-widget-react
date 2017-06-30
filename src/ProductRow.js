import React, { Component } from 'react'

class ProductRow extends Component{
	constructor(props) {
		super(props);
		this.randomThing = props.randomThing
	}
	
	render(){
		if(this.randomThing.inStock === true){
			var productClass = "good"
		}else{
			 productClass = "bad"
		}

		return(
			<tr>
				<td className={productClass}>{this.randomThing.name}</td>
				<td>{this.randomThing.price}</td>
			</tr>
		)
	}
}

export default ProductRow
