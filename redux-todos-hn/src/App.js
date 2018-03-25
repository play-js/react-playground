import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions/todo";
import Title from "./components/Title";
import TODO from "./components/TODO";

class App extends Component {
  render() {
    const { add, todos } = this.props;
    // console.log(add);

    return (
      <div className="App">
        <Title title={this.props.title} />
        <TODO add={add} todos={todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // item: state.item
    // id: 0,
    // text: "Javascript",
    // completed: false,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: text => dispatch(addTodo(text)),
    remove: () => dispatch(removeTodo())
  };
}

App.defaultProps = {
  title: "TODO LIST!"
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
