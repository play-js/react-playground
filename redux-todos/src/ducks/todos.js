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

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id,
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
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
          text: action.text,
        }
      ];
    case COMPLETE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed, }
          : todo
      );
    default:
      return state;
  }
}