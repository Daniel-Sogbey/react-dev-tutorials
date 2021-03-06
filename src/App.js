import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28,
      },
      {
        name: "Manu",
        age: 29,
      },
      {
        name: "Stephanie",
        age: 26,
      },
    ],
    otherState: "Some other state",
  };

  switchNameHandler = newName => {
    console.log("Was  Clicked");
    //::: DON'T DO THIS this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        {
          name: newName,
          age: 28,
        },
        {
          name: "Manu",
          age: 29,
        },
        {
          name: "Stephanie",
          age: 27,
        },
      ],
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 28,
        },
        {
          name: event.target.value,
          age: 29,
        },
        {
          name: "Stephanie",
          age: 26,
        },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherent",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <button
          onClick={() => this.switchNameHandler("Maximilian!!")}
          style={style}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
