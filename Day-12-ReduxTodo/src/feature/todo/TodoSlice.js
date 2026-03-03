import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        createTodo: (state, action) => {
            state.todos.push({ ...action.payload, id: nanoid() });  //Create Todo 
        },
        removeTodo: (state, action) => {
            const { id } = action.payload;

            state.todos = state.todos.filter(todo => todo.id != id);
        },
        updateTodo: (state, action) => {
            const { id } = action.payload;

            state.todos = state.todos.map((todo) => {

                if (todo.id === id) return action.payload;

                return todo;
            })
        }
    }
})

export const { createTodo, removeTodo, updateTodo } = todoSlicer.actions;
export default todoSlicer.reducer;