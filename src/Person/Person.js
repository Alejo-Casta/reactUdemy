import React from 'react';
import Radium from 'radium';

import './Person.css';

const Person = (props) => {
    const style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    }

    return (
        <div style={style} className='Person'>
            <p>Hello i am {props.name}, I am {props.age} years old</p>
            <input type="text" onChange={props.change} value={props.name} /><br />
            <button onClick={props.click}>Delete</button>
        </div>
    )
}

export default Radium(Person);