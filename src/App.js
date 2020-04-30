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

  changeNameHandler = () => {
    this.setState ({
      persons: [
        { name: 'Alejandro', age: 24 },
        { name: 'Lina', age: 23 },
        { name: 'Milo', age: 25 }
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Primer pagina</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Boyfriend: Alejandro </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <button onClick={this.changeNameHandler}>changeName</button>
      </div>
    );
  }
}

export default App;