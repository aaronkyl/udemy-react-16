import React, { Component } from 'react'
import './App.css'
import './ValidationComponent/ValidationComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent';

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
        <ValidationComponent inputStringLength={this.state.inputStringLength} />
      </div>
    )
  }
}

export default App
