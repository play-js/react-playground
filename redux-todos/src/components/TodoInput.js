import React, { Component } from 'react';

class TodoInput extends Component {
  handleClick = () => {
    console.log("Click Add Todo!!");
  }

  render() {
    return (
      <div>
        <input />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    );
  }
}

export default TodoInput;