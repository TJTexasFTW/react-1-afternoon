import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
        
    super();
    
    this.state = {
        userInput: '',
        palindrome: ''}
}

handleChange(val) {
    this.setState({ userInput: val });
}

aPalindrome(userInput) {
  
  let reversed = userInput.split("").reverse().join("").toUpperCase();
  let toUpper = userInput.toUpperCase();
  let isPalindrome = '';

  if (reversed === toUpper) {
    isPalindrome = 'true';
  } else {
    isPalindrome = 'false';
  }

  this.setState({ palindrome: isPalindrome });
}

  render() {
    return (

      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } placeholder="Type in string to filter out"></input>
        <button className="confirmationButton" onClick={ () => { this.aPalindrome(this.state.userInput) }}>Get Results</button>
        <span className="resultsBox filterStringRB">Palindrome: {this.state.palindrome}</span>
    </div>
    )
  }
}