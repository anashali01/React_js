import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createTodos = createAsyncThunk('todo/createTodos', async (todo, { rejectWithValue }) => {
    try {
        const res = await axios.post('https://react-learn-b2837-default-rtdb.asia-southeast1.firebasedatabase.app/todos/.json',todo)

        return { ...todo, id: res.data.name }
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

const todo = createSlice({
    name : 'todo',
    initialState: {
        todo: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createTodos.fulfilled, (state, action) => {
            state.todo.push(action.payload);
        })
    }
});

export default todo.reducer;