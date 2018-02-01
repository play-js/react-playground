import React, { Component } from 'react';
import { Todo } from 'components';

class TodoList extends Component {
  render() {
    return (
      <ul>
        <Todo />
      </ul>
    );
  }
}

export default TodoList;