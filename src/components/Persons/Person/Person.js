import React from 'react';
import style from './Person.module.css';

class Person extends React.Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={style.Person} >
                <p>Hello i am {this.props.name}, I am {this.props.age} years old</p>
                <input className={style.input} type="text" onChange={this.props.change} value={this.props.name} /><br />
                <button className={style.button} onClick={this.props.click}>Delete</button>
            </div>
        )
    }
}

export default Person;