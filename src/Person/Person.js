import React from 'react';

const Person = (props) => (
    <div className='Person'>
        <p>Hello i am {props.name}, I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
)

export default Person;