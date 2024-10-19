import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text : 'First todo'
    }],
    updateMode : false,
    idToBeUpdated : undefined,

}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload
            ))
        },
        updateTodo : (state, action) => {
            state.todos.forEach((todo) => {
                if(todo.id === state.idToBeUpdated) todo.text = action.payload
            })
        },
        toggleUpdateMode : (state, action) => {
            state.updateMode = !state.updateMode
            state.idToBeUpdated = action.payload
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleUpdateMode} = todoSlice.actions

export default todoSlice.reducer