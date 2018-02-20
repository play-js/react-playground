// Actions Types
export const ADD_TODO = "redux-todos-ts/todos/ADD_TODO"

// Actions
export const addTodo = text => ({
  type: ADD_TODO,
  text,
});

// Reducer
const initialState = [
  { id: 0, text: "Javascript", completed: false, },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: state.reducer((maxId, todo) => Math.max(todo.id, maxId), -1) + 1, text: action.text, completed: false },
      ];
    default:
      return state;
  }
};

export default todos;