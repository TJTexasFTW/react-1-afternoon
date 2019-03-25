import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [], 
            oddArray: [], 
            userInput: ''};
        // this.evenOddCalc = this.evenOddCalc.bind(this);
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
    
      evenOddCalc(userInput) {
        // alert("It's ALIVE! " + userInput); 
        let splitArr = userInput.split(',');
        let oddArr = [];
        let evenArr = [];
    
        for (var i = 0; i < splitArr.length; i++) {
            if (splitArr[i] % 2 === 0) {
                evenArr.push(splitArr[i])
            } else {
                oddArr.push(splitArr[i])
        }
    }
    
        this.setState({ evenArray: evenArr, oddArray: oddArr });
        // alert("Evens: " + evenArr + "  Odds: " + oddArr);
      }
    


    render() {
    
        // if (this.state.evenArray) console.log("This state: " + this.state);
    
        return (
      <div className="puzzleBox evenAndOddPB">
          <h4>Even and Odds</h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } placeholder="Input numbers separated by commas"></input>
          <button className="confirmationButton" onClick={ () => { this.evenOddCalc(this.state.userInput) }}>Get Results</button>
          <span className="resultsBox">Evens: {this.state.evenArray}</span>
          <span className="resultsBox">Odds: {this.state.oddArray}</span>
      </div>
    )
  }

}
