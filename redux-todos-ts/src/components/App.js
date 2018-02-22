import React, { Component } from 'react';
// Custom
import { TodoInput, TodoList } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
