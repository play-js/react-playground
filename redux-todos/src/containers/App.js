import React from 'react';
import { connect } from 'react-redux';
import { TodoInput, TodoList } from 'components';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'ducks/todos';

const App = ({ todos, actions }) => {
  return (
    <div>
      <TodoInput addTodo={actions.addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);