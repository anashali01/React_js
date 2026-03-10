import { createSlice, nanoid } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employee: [],
        editData: []
    },
    reducers: {
        createEmployee(state, action) {
            state.employee.push({ ...action.payload, id: nanoid(), isActive: true });
        },
        updateEmployee(state, action) {
            state.employee = state.employee.map((emp) => {
                if (emp.id == action.payload.id) return action.payload;
                return emp;
            })
            state.editData = {};
        },
        deactiveEmployee(state, action) {
            const id = action.payload;
            let index = state.employee.findIndex(emp => emp.id == id)
            state.employee[index].isActive = false;
            console.log("Employee deactive")
        },
        activeEmployee(state, action) {
            const id = action.payload;
            let index = state.employee.findIndex(emp => emp.id == id)
            state.employee[index].isActive = true;
            console.log("Employee Active")
        },
        setEditData(state, action) {
            state.editData = action.payload
        }
    }
});

export const { createEmployee, updateEmployee, deactiveEmployee, activeEmployee, setEditData } = employeeSlice.actions;
export default employeeSlice.reducer;