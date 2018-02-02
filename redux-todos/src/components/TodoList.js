import React, { Component } from 'react';
import { Todo } from 'components';

class TodoList extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={actions.completeTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;