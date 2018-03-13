import { ADD_TODO } from '../actions/todo';

const initialState = [
    { id: 0, text: "Data", completed: false },
];

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id: state.id, text: action.text, completed: false },
            ]
        default:
            return state;
    }
}

export default todoReducer;