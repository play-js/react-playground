import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { state, onIncrement, onDecrement } = this.props;

    return (
      <div>
        Count : {`${state} `}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;