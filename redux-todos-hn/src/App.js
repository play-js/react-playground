import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions/TodoAction";
import Title from "./components/Title";
import Todolist from "./components/Todolist";

class App extends Component {
  render() {
    const { add, remove, todos, title } = this.props;

    return (
      <div className="App">
        <Title title={title} />
        <Todolist add={add} remove={remove} todos={todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: text => dispatch(addTodo(text)),
    remove: id => dispatch(removeTodo(id))
  };
}

App.defaultProps = {
  title: "TODO LIST!"
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
