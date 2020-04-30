import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alejandro', age: 24 },
      { name: 'Lina', age: 23 },
      { name: 'Ramas', age: 24 }
    ]
  }

  changeNameHandler = (friend, age) => {
    this.setState ({
      persons: [
        { name: 'Alejandro', age: 24 },
        { name: 'Lina', age: 23 },
        { name: friend, age }
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Primer pagina</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 'Ramas', 24)}>Boyfriend: Alejandro </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <button onClick={() => this.changeNameHandler('Milo', 25)}>changeName</button>
      </div>
    );
  }
}

export default App;