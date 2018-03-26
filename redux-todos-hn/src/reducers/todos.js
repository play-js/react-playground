import { ADD_TODO, REMOVE_TODO } from '../actions/todo';

const initialState = [
    { id: 0, text: "Data", completed: false },
];

function todoReducer(state = { todos: [] }, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos : state.todos.concat({
                    id: action.id,
                    text: action.text,
                    completed: false
                })
            });
        case REMOVE_TODO:
            const todos = state.todos.filter(todos => todos.id.toString() !== action.id);
            return  { todos };
        default:
            return state;
    }
}

export default todoReducer;