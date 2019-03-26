import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor() {
        
        super();
        
        this.state = {
            unFilteredArray: ["Mickey", "Mouse", "Company", "Not", "Fun", "anywhere"], 
            userInput: '',
            filteredArray: []}
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }

    filterStuff(userInput) {
        let filtered = [];
        
        for (let i=0; i < this.state.unFilteredArray.length; i++) {
            if (this.state.unFilteredArray[i].includes(userInput)) {
                
            } else {
                filtered.push(this.state.unFilteredArray[i]);
            }
        }
        this.setState({ filteredNames: filtered });
    }




    render() {
    return (
    <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } placeholder="Type in string to filter out"></input>
        <button className="confirmationButton" onClick={ () => { this.filterStuff(this.state.userInput) }}>Get Results</button>
        <span className="puzzleText"> Array to Filter: {this.state.unFilteredArray}</span>
        <span className="resultsBox filterStringRB">Filtered: {this.state.filteredNames}</span>
    </div>
    )
  }
}