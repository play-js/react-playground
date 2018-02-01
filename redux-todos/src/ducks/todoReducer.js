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
const initialState = {
  index: 0,
  text: "Click ->",
  completed: false,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        index: state.index + 1,
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