import React from 'react';

import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, i) => {
    return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.delete(i)}
        change={(e) => props.change(e, person.id)}
    />
})

export default Persons; 