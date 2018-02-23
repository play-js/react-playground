import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    input: "",
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  }

  handleAdd = () => {
    const { addTodo } = this.props;
    const { input } = this.state;

    addTodo(input);
    this.setState({ input: "" });
  }

  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.handleAdd();
    }
  }

  render() {
    const { handleChange, handleAdd, handleKeyDown } = this;
    const { input } = this.state;

    return (
      <div>
        <input
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  }
}

export default TodoInput;