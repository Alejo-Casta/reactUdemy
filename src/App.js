import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alejandro', age: 24 },
      { name: 'Lina', age: 23 },
      { name: 'Teo', age: 24 }
    ]
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

  render(){
    return (
      <div className="App">
        <h1>Primer pagina</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.changeNameHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changePersonsHandler.bind(this, 'Ramas', 24)}>Boyfriend: Alejandro </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <button onClick={() => this.changePersonsHandler('Milo', 25)}>Change Persons</button> {/*Menos eficiente*/}
      </div>
    );
  }
}

export default App;