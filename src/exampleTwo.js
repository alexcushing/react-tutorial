import React, { Component } from "react";

// Components (Stateful Components) & state

class ExampleTwo extends Component {
  // 2 way bound data tied uniquely to this component
  state = {
    colorIsRed: true
  };
  changeColor = () => {
    // allows us to change the state - then it in turn updates only the necessary changes through reacts virtual dom through the render function
    this.setState({ colorIsRed: !this.state.colorIsRed });
  };
  // slow part of rendering changes to DOM - re-painting
  // virtual DOM skips the painting part until full re render is calculated & then updates only what has changed
  render() {
    return (
      <div>
        <button onClick={this.changeColor}>change color</button>
        <h1
          style={{ color: this.state.colorIsRed ? "red" : "blue" }}
        >
          The color is {this.state.colorIsRed ? 'red' : 'blue'}
        </h1>
      </div>
    );
  }
}

export default ExampleTwo;