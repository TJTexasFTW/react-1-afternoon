import React, { Component } from 'react';

export default class Sum extends Component {
  constructor() {
        
    super();
    
    this.state = {
        number1: 0,
        number2: 0,
        sum: null}
}

handleChange1(val) {
    this.setState({ number1: val });
}

handleChange2(val) {
  this.setState({ number2: val });
}

aSum() {
  let total = Number(this.state.number1) + Number(this.state.number2);
  this.setState({ sum: total });
}

  render() {
    return (

      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value) } placeholder="Type in a number"></input>
        <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value) } placeholder="Type in a number"></input>
        <button className="confirmationButton" onClick={ () => { this.aSum()  }}>Get Results</button>
        <span className="resultsBox">Your sum is: {this.state.sum}</span>
    </div>
    )
  }
}
