import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { state, addTodo } = this.props;

    return (
      <div>
        {`Text : ${state.text} `}
        <button
          onClick={() => addTodo("Success")}
        >
          Action Test
        </button>
      </div>
    );
  }
}

export default Todo;