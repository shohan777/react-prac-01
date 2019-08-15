import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    console.log('[Cockpit.js] rendering...');
    let btnClass = '';
    const assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if(props.showPersons) {
        btnClass = classes.red;
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is from Root Component</p>
            <button
                className={btnClass} 
                onClick={props.clicked}>
                Toggle person
            </button>
        </div>
    );
}

export default cockpit;
