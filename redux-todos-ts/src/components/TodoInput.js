import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    input: "",
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  }

  handleClick = () => {
    const { addTodo } = this.props;
    const { input } = this.state;

    addTodo(input);
    this.setState({ input: "" });
  }

  render() {
    const { handleChange, handleClick } = this;
    const { input } = this.state;

    return (
      <div>
        <input
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    );
  }
}

export default TodoInput;