import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    
    static getDrivedStateFromProps(props, state) {
        console.log('[Persons.js] getDrivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return(
        this.props.persons.map((person, index) => {
            return (
            <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={event => this.props.changed(event, person.id)}
                key={person.id}
            />
            );
        })
    )
    }
};

export default Persons;