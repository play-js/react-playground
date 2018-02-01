import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    text: "",
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.handleAddTodo();
    }
  }

  handleAddTodo = () => {
    const { addTodo } = this.props;
    const { text } = this.state;

    if (text === "") {
      return;
    }

    addTodo(text.trim());
    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.text}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoInput;