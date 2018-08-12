import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'
import Person from '../components/Persons/Person/Person';

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        { id:'a' , name: 'Max', age: 28 },
        { id:'b' , name: 'Manu', age: 29 },
        { id:'c' , name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClickedCounter: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.otherState !== this.state.otherState ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClickedCounter: prevState.toggleClickedCounter + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] Inside render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      )
    }


    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func
}

export default withClass(App, classes.App);
