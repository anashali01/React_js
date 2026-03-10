import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employee/employeeSlicer.js";
import userReducer from "../feature/user/userSlice.js";
const store = configureStore({
    reducer: {
        employee: employeeReducer,
        user : userReducer
    }
});

export default store;