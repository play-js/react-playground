// Actions Types
const ADD_TODO = "redux-todos/todos/ADD_TODO";
const COMPLETE_TODO = "redux-todos/todos/COMPLETE_TODO";

// Actions
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
};

export function completeTodo(todoIndex, complete = true) {
  return {
    type: COMPLETE_TODO,
    todoIndex,
  };
};

// Reducers
const initialState = [
  {
    id: 0,
    text: "Redux Todos",
    completed: false,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        id: state.reducer((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
        text: action.text,
      };
    case COMPLETE_TODO:
      return {
        ...state,
        completed: action.completed,
      };
    default:
      return state;
  }
}