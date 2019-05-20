import React, { Component } from "react";

class ExampleThree extends Component {
  state = {
    clubs: [
      {
        key: "chelsea",
        name: "Chelsea",
        code: "CHE"
      },
      {
        key: "arsenal",
        name: "Arsenal",
        code: "ARS"
      },
      {
        key: "manutd",
        name: "Manchester United",
        code: "MUN"
      }
    ],
    newKey: "",
    newName: "",
    newCode: ""
  };

  updateInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addToClubs = () => {
    if (
      this.state.newKey === "" ||
      this.state.newName === "" ||
      this.state.newCode === ""
    ) {
      alert(`fill in all those inputs!`);
    } else {
      const addedTeam = {
        key: this.state.newKey,
        name: this.state.newName,
        code: this.state.newCode
      };
      this.setState({
        clubs: [...this.state.clubs, addedTeam],
        newKey: "",
        newName: "",
        newCode: ""
      });
    }
  };

  render() {
    return (
      <div>
        <h1>
          Our league has {this.state.clubs.length} clubs!
        </h1>
        <table>
          <tbody>
            {this.state.clubs.map((club, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{club.key}</td>
                <td>{club.name}</td>
                <td>{club.code}</td>
              </tr>
            ))}
            <tr>
              <td>Add: </td>
              <td>
                <input
                  name="newKey"
                  onChange={this.updateInput}
                  value={this.state.newKey}
                />
              </td>
              <td>
                <input
                  name="newName"
                  onChange={this.updateInput}
                  value={this.state.newName}
                />
              </td>
              <td>
                <input
                  name="newCode"
                  onChange={this.updateInput}
                  value={this.state.newCode}
                />
              </td>
              <td>
                <button onClick={this.addToClubs}>submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExampleThree;