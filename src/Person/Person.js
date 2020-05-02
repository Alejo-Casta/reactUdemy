import React from 'react';
import './Person.css';

const Person = (props) => (
    <div className='Person'>
        <p>Hello i am {props.name}, I am {props.age} years old</p>
        <button onClick={props.click}>Delete</button>
        {/* <input type="text" onChange={props.change} value={props.name}/> */}
    </div>
)

export default Person;