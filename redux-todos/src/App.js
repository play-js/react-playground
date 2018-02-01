import React, { Component } from 'react';
import { TodoInput, TodoList } from 'components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
