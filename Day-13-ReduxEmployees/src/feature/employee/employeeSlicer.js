import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name : "employee",
    initialState : {
        employee : []
    },
    reducers : {
        createEmployee (state , action) {

        } ,
        deleteEmployee (state , action) {

        } ,
        updateEmployee (state , action) {

        }
    }
});

export const {createEmployee , deleteEmployee , updateEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;