import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  switchPersonHandler = newName => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 28 },
        { id: 2, name: "Manu", age: 29 },
        { id: 3, name: "Stephanie", age: 27 }
      ]
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHander = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    // const newPerson = persons.filter((person, ind) => ind !== index)
    this.setState({ persons: persons });
  };

  render() {
    
    let persons = null;
    
    if (this.state.showPersons) {
        persons = <Persons 
            persons={ this.state.persons }
            clicked={ this.deletePersonHander }
            changed={ this.changeNameHandler }/>;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
