import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstanse";

export const loginUser = createAsyncThunk('/auth/login', async (data, { rejectWithValue }) => {
    try {
        let res = await instance.get('/employees');

        const user = res.data.find((u) => {
            return u.email === data.email && u.pin === data.pin
        });

        if (!user) throw new Error('Invalid')

        return user
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const authSlicer = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuth: false
    },
    reducers: {
        logout(state) {
            state.user = null,
                state.isAuth = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload,
                state.isAuth = true
        })
    }
})

export default authSlicer.reducer;