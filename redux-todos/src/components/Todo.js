import React, { Component } from 'react';

class Todo extends Component {
  handleClick = () => {
    console.log("Todo Click!!!")
  }

  render() {
    const { text, completed } = this.props.todo;

    return (
      <li
        onClick={this.handleClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;