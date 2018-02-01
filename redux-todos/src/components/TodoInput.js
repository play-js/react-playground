import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    text: "",
  };

  handleChange = event => {
    this.setState({ text: event.target.value });

  }
  handleClick = () => {
    const { addTodo } = this.props;

    addTodo(this.state.text);
    this.setState({ text: "" });
  }

  handleKeyDown = event => {
    if (event.key === "Enter") {
      const { addTodo } = this.props;

      addTodo(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.text}
        />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    );
  }
}

export default TodoInput;