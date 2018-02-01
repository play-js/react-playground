import React, { Component } from 'react';

class Todo extends Component {
  handleClick = () => {
    console.log("Todo Click!!!")
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        text
      </li>
    );
  }
}

export default Todo;