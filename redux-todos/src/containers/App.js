import React from 'react';
import { connect } from 'react-redux';
import { TodoInput, TodoList } from 'components';

const App = ({ todos }) => {
  return (
    <div>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
)(App);