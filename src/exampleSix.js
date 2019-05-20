import React, { Component } from 'react';

const Button = props => (
  <button style={{color: props.color}}>
    {props.text}
  </button>
);

class ExampleSix extends Component {
  state = {
    text: '',
    color: ''
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        edit button text <input name='text' onChange={this.onChange} value={this.state.text} /><br />
        edit button color <input name='color' onChange={this.onChange} value={this.state.value} /><br />
        <Button color='red' text='Click Me!'/><br />
        <Button color={this.state.color} text={this.state.text}/>
      </div>
    );
  }
}

export default ExampleSix;