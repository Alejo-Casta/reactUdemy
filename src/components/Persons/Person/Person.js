import React from 'react';
import style from './Person.module.css';

const Person = (props) => {
    console.log('[Person.js] rendering...')
    return (
        <div className={style.Person}>
            <p>Hello i am {props.name}, I am {props.age} years old</p>
            <input className={style.input} type="text" onChange={props.change} value={props.name} /><br />
            <button className={style.button} onClick={props.click}>Delete</button>
        </div>
    )
}

export default Person;