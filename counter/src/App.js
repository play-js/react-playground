import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick = () => {
    // this.setState({ count: this.state.count++ }) // X
    this.setState({ count: this.state.count + 1 }); // O
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>Up</button>
      </div>
    );
  }
}

export default App;
