import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employee/employeeSlicer.js";
const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
});

export default store;