import React, { Component } from "react";
import axios from "axios";
import ExampleThree from './exampleThreeWithProps.js'

// props, component tree, lifecycle methods

class ExampleFour extends Component {
  state = {
    loading: true,
    people: [],
    newGender: '',
    newName: '',
    newHairColor: ''
  }
  // lifecycle method - did mount
  componentDidMount() {
    this.starWarsify();
  }
  starWarsify = () => {
    axios.get('https://swapi.co/api/people/').then(response => {
      this.setState({ people: response.data.results, loading: false });
    });
  }
  updateInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  addToSwapi = () => {
    const addedPerson = {
      name: this.state.newName,
      gender: this.state.newGender,
      hair_color: this.state.newHairColor
    };
    this.setState({ 
      people: [...this.state.people, addedPerson],
      newGender: '',
      newName: '',
      newHairColor: ''
    });
  }
  render() {
    return (
      <div>
        { this.state.loading ? 
          <h3>loading...</h3> : 
          <ExampleThree
            people={this.state.people}
            newGender={this.state.newGender}
            newName={this.state.newName}
            newHairColor={this.state.newHairColor}
            updateInput={this.updateInput}
            addToSwapi={this.addToSwapi}
          />
        }
      </div>
    );
  }
};

export default ExampleFour;