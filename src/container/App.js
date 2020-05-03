import React, { Component } from 'react';

import styles from './App.module.css';
import Person from '../components/Persons/Person/Person';

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
    let btnClass = [styles.button];

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
      btnClass.push(styles.red)
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push(styles.red)
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold)
    }

    return (
      <div className={styles.App}>
        <h1>First page</h1>
        <p className={classes.join(' ')}>This really works</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;