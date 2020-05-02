import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }

`;

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'Alejandro', age: 24 },
      { id: 'p2', name: 'Lina', age: 23 },
      { id: 'p3', name: 'Teo', age: 24 }
    ],
    showPersons: false
  }

  changeNameHandler = (e, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index
    })

    const person = { ...this.state.persons[personIndex] }
    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(i)}
              change={(e) => this.changeNameHandler(e, person.id)}
            />
          })}
        </div>
      )
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>First page</h1>
        <p className={classes.join(' ')}>This really works</p>
        <StyledButton onClick={this.togglePersonsHandler}>Show Persons</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;