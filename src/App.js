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
    this.setState ({
      persons: [
        { name: this.state.persons[0].name, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
        { name: friend, age }
      ]
    })
  }

  changeNameHandler = (e) => {
    this.setState ({
      persons: [
        { name: e.target.value, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
        { name: this.state.persons[2].name, age: this.state.persons[2].age }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">
        <h1>Primer pagina</h1>
        <button style={style} onClick={() => this.togglePersonsHandler('Milo', 25)}>Show Persons</button> {/*Menos eficiente*/}
        {this.state.showPersons === true ?
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.changeNameHandler}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changePersonsHandler.bind(this, 'Ramas', 24)}>Boyfriend: Alejandro </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null
        }
      </div>
    );
  }
}

export default App;