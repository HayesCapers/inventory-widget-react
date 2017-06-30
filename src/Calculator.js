import React, { Component } from 'react'
// import BoilingVerdict from './BoilingVerdict.js'
import TemperatureInput from './TemperatureInput.js'

class Calculator extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
    	temperature: ''
    };
  }

  handleChange(e) {
    this.setState({
    	temperature: e.target.value
    });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator