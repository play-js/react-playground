import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "sky"
    }
  }

  componentDidMount() {
    var _this = this;

    setTimeout(function() {
      _this.setState({ msg: "love" });
    },3000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world!</h1>
        </header>
        <p className="App-intro">
          {this.state.msg}
        </p>
      </div>
    );
  }
}

export default App;
