import React, { Component } from 'react'
import './App.css'
import './ValidationComponent/ValidationComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputStringLength: 0,
    inputText: null
  }

  lengthChangeHandler = event => {
    let inputStringLength = event.target.value.length
    let inputText = event.target.value
    this.setState({
      inputStringLength: inputStringLength,
      inputText: inputText
    })
  }

  deleteCharacterHandler = (index) => {
    let newInputText = this.state.inputText.split('')
    newInputText.splice(index, 1)
    newInputText = newInputText.join('')
    this.setState({
      inputText: newInputText,
      inputStringLength: newInputText.length
    })
  }

  render() {
    let charComponentsArray = null
    
    if (this.state.inputText) {
      charComponentsArray = this.state.inputText.split('').map((character, index) => {
        return <CharComponent key={index} char={character} click={this.deleteCharacterHandler.bind(this, index)} />
      })
    }

    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={(event) => this.lengthChangeHandler(event)} />
        <p>{this.state.inputStringLength}</p>
        <ValidationComponent inputStringLength={this.state.inputStringLength} />
        {charComponentsArray}
      </div>
    )
  }
}

export default App
