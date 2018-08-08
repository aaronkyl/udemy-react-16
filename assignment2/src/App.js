import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputStringLength: 0
  }

  lengthChangeHandler = event => {
    let inputStringLength = event.target.value.length
    this.setState({inputStringLength: inputStringLength})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.lengthChangeHandler(event)} />
        <p>{this.state.inputStringLength}</p>
      </div>
    );
  }
}

export default App;
