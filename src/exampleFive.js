import React, { Component } from "react";
import ExampleOne from './exampleOne.js';
import ExampleTwo from './exampleTwo.js';
import ExampleThree from './exampleThree.js';
import ExampleFour from './exampleFour.js';

//COMPONENTS COMPONENTS COMPONENTS!!!

class ExampleFive extends Component {
  state = {
    liveExample: 1,
  }
  cycleUp = () => {
    const newExample = this.state.liveExample !== 4 ? this.state.liveExample + 1 : 1;
    this.setState({ liveExample: newExample });
  }
  cycleDown = () => {
    const newExample = this.state.liveExample !== 1 ? this.state.liveExample - 1 : 4;
    this.setState({ liveExample: newExample });
  }
  render() {
    return (
      // Fragments
      <>
        <h1>example {this.state.liveExample}</h1>
        <button onClick={this.cycleDown}> 👈 </button>
        <button onClick={this.cycleUp}> 👉 </button>
        {this.state.liveExample == 1 && <ExampleOne />}
        {this.state.liveExample == 2 && <ExampleTwo />}
        {this.state.liveExample == 3 && <ExampleThree />}
        {this.state.liveExample == 4 && <ExampleFour />}
      </>
    );
  }
}

export default ExampleFive;