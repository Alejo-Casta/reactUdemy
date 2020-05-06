import React from 'react';

import Person from './Person/Person'

class Persons extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' }
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(Snapshot)
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, i) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.delete(i)}
                change={(e) => this.props.change(e, person.id)}
            />
        })
    }
}

export default Persons; 