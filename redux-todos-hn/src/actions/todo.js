// Actinos Types
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
let nextTodoId = 0;

// Actions
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text,
        id: nextTodoId++
    };
};

export function removeTodo(text) {
    return {
        type: REMOVE_TODO,
        text: text

    };
};