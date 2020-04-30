import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersons] = useState({
    persons: [
      { name: 'Alejandro', age: 24 },
      { name: 'Lina', age: 23 },
      { name: 'Ramas', age: 24 }
    ]
  })

  const [otherState, setOtherState ] = useState({
    otherState: 'This is other State'
  })

  console.log(personsState)
  console.log(otherState)

  const  changeNameHandler = () => {
    setPersons ({
      persons: [
        { name: 'Alejandro', age: 24 },
        { name: 'Lina', age: 23 },
        { name: 'Milo', age: 25 }
      ]
    })
    setOtherState('The new other state')
  }

  return (
    <div className="App">
      <h1>Primer pagina</h1>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Boyfriend: Alejandro </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      <button onClick={changeNameHandler}>changeName</button>
    </div>
  );
}

export default App;