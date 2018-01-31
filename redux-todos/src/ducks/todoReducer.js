// Actions Types
const ADD_TODO = "redux-todos/todos/ADD_TODO";

// Actions
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
    };
};

// Reducers
const initialState = {
    text: "Click ->",
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                text: action.text,
            };
        default:
            return state;
    }
}