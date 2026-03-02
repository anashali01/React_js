import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count : 0
    },
    reducers: {
        increment : (state) => {
            state.count++; // Increment Count
        },
        decrement : (state) => {
            state.count--; // Decrement Count
        }
    }
})

export const {increment , decrement} = counterSlice.actions;  // Pass Methods TO other FIles

// the slice object is not a reducer itself, export the reducer
export default counterSlice.reducer;