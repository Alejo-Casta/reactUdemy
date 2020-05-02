import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }

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
      style.backgroundColor = 'red'
    }

    return (
      <div className="App">
        <h1>Primer pagina</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;