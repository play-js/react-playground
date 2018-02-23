import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Custom
import { TodoInput, TodoList } from 'components';
import * as TodoActions from 'ducks/todos';

const App = ({ todos, actions }) => (
  <div>
    <TodoInput {...actions} />
    <TodoList todos={todos} />
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
