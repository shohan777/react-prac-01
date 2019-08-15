import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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

  togglePerson = () => {
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
    const btnStyle = {
      backgroundColor: "#8bffee",
      color: "#fff",
      padding: "6px 7px",
      border: "1px solid #8bffee",
      cursor: "pointer",
      borderRadius: "3px",
      fontSize: "13px"
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHander.bind(this, index)}
                name={person.name}
                age={person.age}
                changed={event => this.changeNameHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );

      btnStyle.backgroundColor = "red";
    }
    return (
        <div className="App">
          <h1>This is React App</h1>
          <p className={classes.join(" ")}>This is from Root Component</p>
          <button style={btnStyle} onClick={this.togglePerson}>
            Toggle person
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
