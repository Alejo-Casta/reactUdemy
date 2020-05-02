import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alejandro', age: 24 },
      { name: 'Lina', age: 23 },
      { name: 'Teo', age: 24 }
    ],
    showPersons: false
  }

  changePersonsHandler = (friend, age) => {
    this.setState({
      persons: [
        { name: this.state.persons[0].name, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
        { name: friend, age }
      ]
    })
  }

  changeNameHandler = (e) => {
    this.setState({
      persons: [
        { name: e.target.value, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
        { name: this.state.persons[2].name, age: this.state.persons[2].age }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons=(
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/> 
          })}
        </div>
      )
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