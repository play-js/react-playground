import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul>
        {
          todos.map(todo => (
            <li
              key={todo.id}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TodoList;