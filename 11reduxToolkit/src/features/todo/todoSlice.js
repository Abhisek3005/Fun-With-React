import { craeteSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
    todos : [{id:1, Text: 'Hello'}]
}


export const todoSlice = craeteSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (stae, action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            stae.todos.push(todo)
         },
        removeTodo :(state, action) => {
           state.todos = stae.todos.filter((todo) => todo.id !== action.payload)
    
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer