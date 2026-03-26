import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../api/axiosInstanse";


export const createTask = createAsyncThunk('task/createTask', async (task, { rejectWithValue }) => {
    try {
        task.status = 'Pending'
        const res = await instance.post('/task', task);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const getAll = createAsyncThunk('task/getAll', async (_, { rejectWithValue }) => {
    try {
        const res = await instance.get('/task');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const completeTask = createAsyncThunk('task/completeTask', async (id, { rejectWithValue }) => {
    try {
        const res = await instance.patch(`/task/${id}`, {
            status: 'Complete'
        });
        return res.data
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        isLogin: false,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createTask.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createTask.fulfilled, (state, action) => {
            state.tasks.push(action.payload);
            state.loading = false;
        })
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.tasks = action.payload;
        })
        builder.addCase(completeTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        });
    }
})


export default taskSlice.reducer