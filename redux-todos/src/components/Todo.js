import React, { Component } from 'react';

class Todo extends Component {
  handleClick = () => {
    const { todo, completeTodo } = this.props;
    
    completeTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    const { text, completed } = todo;

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