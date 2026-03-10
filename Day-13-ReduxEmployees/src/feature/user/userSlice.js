import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";


export const createUser = createAsyncThunk('users/createUser', async (user, { rejectWithValue }) => {
    try {
        let data = {
            ...user,
            id: nanoid()
        }
        await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return data;
    } catch (error) {
        console.log(error.message);
        rejectWithValue(error.message);
    }
})
const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLogin: false,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
    }
});

export default userSlice.reducer;