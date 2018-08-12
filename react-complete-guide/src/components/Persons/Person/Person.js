import React , { Component } from 'react'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import { AuthContext } from '../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[Person.js] Inside Constructor', props)
    this.inputElement = React.createRef()
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
    if (this.props.position === 0) {
      this.inputElement.current.focus()
    }
  }

  render () {
    console.log('[Person.js] Inside render()')

    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          ref={this.inputElement}
          type="text" 
          value={this.props.name} 
          onChange={this.props.changed} 
        />
      </Aux>
    )

    // return [
    //   <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
    //   <p>{this.props.children}</p>,
    //   <input type="text" value={this.props.name} onChange={this.props.changed} />
    // ]
  }
}

export default withClass(Person, classes.Person)
