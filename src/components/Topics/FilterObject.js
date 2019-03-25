import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        
        super();
        
        this.state = {
            unFilteredArray: [{name: "T", zip: 12345, heightInches: 60, favNum: 13}, 
            {name: "K", zip: 23456, heightInches: 50}, {name: "M", zip: 34567, heightInches: 67, hairColor: "blonde"}, {name: "T", zip: 12345, heightInches: 60, eyeColor: "brown"}], 
            userInput: '',
            filteredArray: []}
    }
  
    handleChange(val) {
        this.setState({ userInput: val });
      }

    filterStuff(userInput) {
        // let unfiltered = this.unFilteredArray;
        // alert(userInput);
        var filtered = [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if (this.state.unFilteredArray[i].hasOwnProperty(userInput)) {
                filtered.push(this.state.unFilteredArray[i]);
            }
        } 
        this.setState({ filteredArray: filtered });
    }
  
    render() {
    return (
        <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.filterStuff(this.state.userInput) }}>Get Results</button>
        <span className="puzzleText"> Array to Filter: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
    </div>
    )
  }
}