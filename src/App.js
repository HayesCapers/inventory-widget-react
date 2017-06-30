import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable.js'
import Toggle from './Toggle.js'
import MyForm from './MyForm.js'
import Calculator from './Calculator'

class App extends Component {
    constructor(props) {
        super(props);
        this.products = props.products
    }
    render() {

        return(
            <Calculator />
        )

        return(
            <MyForm />
        )

        return(
            <Toggle />
        )

        return (
            <div className="App container">
                <FilterableProductTable products={this.products} />
            </div>
        );
    }
}

export default App;
