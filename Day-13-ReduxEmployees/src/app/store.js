import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employee/employeeSlicer.js";
import taskReducer from "../feature/tasks/taskSlice.js";
import authReducer from "../feature/auth/authSlicer.js";
const store = configureStore({
    reducer: {
        employee: employeeReducer,
        tasks : taskReducer ,
        auth : authReducer
    }
});

export default store;