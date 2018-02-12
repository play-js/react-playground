import React, { Component } from 'react';
import {connect} from 'react-redux';
import Title from './components/Title';
import Counter from './components/Counter';

class App extends Component {
  increment = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }  

  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'});
  }

  render() {
    return (
      <div className="App">
        <Title title={this.props.title}/>
        <Counter number={this.props.count} decrement={this.decrement} increment={this.increment}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

App.defaultProps = {
  title : 'This is a counter!'
}

export default connect(mapStateToProps)(App);
