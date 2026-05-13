import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const createTodos = createAsyncThunk('todo/createTodos', async (todo, { rejectWithValue }) => {
    try {
        const res = await apiInstance.post('/todos/.json', todo)

        return { ...todo, id: res.data.name }
    } catch (error) {
        return rejectWithValue(error.response)
    }
})


export const getAllTodo = createAsyncThunk('todo/getAllTodo', async (_, { rejectWithValue }) => {
    try {
        const res = await apiInstance.get('/todos/.json');

        return Object.keys(res.data).map(key => ({ ...res.data[key], id: key }));
    } catch (error) {
        rejectWithValue(error.response)
    }
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id, { rejectWithValue }) => {
    try {
        let res = await apiInstance.delete(`/todos/${id}/.json`);
        console.log(res);
        return id;
    } catch (error) {
        rejectWithValue(error.response)
    }
})

export const updateTodo = createAsyncThunk('todo/updateTodo', async (todo, { rejectWithValue }) => {
    try {
        const { id } = todo;
        delete todo.id
        let res = await apiInstance.patch(`/todos/${id}/.json`,todo)
        console.log(res);
        return { ...todo, id:id };
    } catch (error) {
        rejectWithValue(error.response)
    }
})
const todo = createSlice({
    name: 'todo',
    initialState: {
        todo: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createTodos.fulfilled, (state, action) => {
            state.todo.push(action.payload);
        })
        builder.addCase(getAllTodo.fulfilled, (state, action) => {
            state.todo = action.payload
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.todo = state.todo.filter(val => val.id !== action.payload);
        })
        builder.addCase(updateTodo.fulfilled, (state, action) => {
            state.todo = state.todo.map((val) => {
                if (val.id ===  action.payload.id) {
                    return action.payload
                }
                return val
            })
        })
    }
});

export default todo.reducer;