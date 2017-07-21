import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    diff: 1,
  };

  // This style of function declaration on a class is called a "property initializer"
  // This is needed because this function is used as an event handler,
  // which means that it will be called without the context needed, without the
  // appropriate "this".
  // See more: https://gist.github.com/lourd/8f450b609aab68d1de9b35228e784f30
  onUpClick = () => {
    this.setState({ count: this.state.count + this.state.diff });
  };

  onDownClick = () => {
    this.setState({ count: this.state.count - this.state.diff });
  };

  onInputChange = (event) => {
    // event.target.value is a string, we need to make it a number
    // console.log(typeof event.target.value)
    // see more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    let num = parseInt(event.target.value, 10)
    this.setState({ diff: num })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onUpClick}>Up</button>
        <button onClick={this.onDownClick}>Down</button>
        <input type="number" onChange={this.onInputChange} value={this.state.diff}/>
      </div>
    );
  }
}

export default App;
