import React, { Component } from "react";
import Table from "./table";
import Form from "./form";
class App extends Component {
  state = {
    characters: [
      {
        name: "Ram",
        job: "Professor",
      },
      { name: "Raja", job: "Dev" },
      { name: "Meet", job: "Release manager" },
    ],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>React learning!!!</h1>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
