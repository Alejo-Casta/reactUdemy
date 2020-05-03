import React from 'react';

import styles from './Cockpit.module.css'

const Cockpit = (props) => {
    const classes = []
    let btnClass = [styles.button]

    if (props.showPersons) {
        btnClass = styles.buttonRed;
    }
    if (props.persons.length <= 2) {
        classes.push(styles.red)
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold)
    }

    return (
        <div className=''>
            <h1>First page</h1>
            <p className={classes.join(' ')}>This really works</p>
            <button className={btnClass} onClick={props.click}>Show Persons</button>
        </div>
    )
}

export default Cockpit;