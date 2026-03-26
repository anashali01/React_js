import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import instance from "../../api/axiosInstanse";

export const createEmployee = createAsyncThunk('/employee/createEmployee', async (emp, { rejectWithValue }) => {
    try {
        emp.role = 'employee'
        const res = await instance.post('/employees', { ...emp, id: nanoid() });
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getAllEmp = createAsyncThunk('/employee/getAll', async (_, { rejectWithValue }) => {
    try {
        let res = await instance.get('/employees')
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteEmp = createAsyncThunk(`/employees/deleteEmp`, async (id, { rejectWithValue }) => {
    try {
        await instance.delete(`/employees/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employee: [],
        editData: {}
    },
    reducers: {
        // createEmployee(state, action) {
        //     state.employee.push({ ...action.payload, id: nanoid(), isActive: true });
        // },
        // updateEmployee(state, action) {
        //     state.employee = state.employee.map((emp) => {
        //         if (emp.id == action.payload.id) return action.payload;
        //         return emp;
        //     })
        //     state.editData = {};
        // },
        // deactiveEmployee(state, action) {
        //     const id = action.payload;
        //     let index = state.employee.findIndex(emp => emp.id == id)
        //     state.employee[index].isActive = false;
        //     console.log("Employee deactive")
        // },
        // activeEmployee(state, action) {
        //     const id = action.payload;
        //     let index = state.employee.findIndex(emp => emp.id == id)
        //     state.employee[index].isActive = true;
        //     console.log("Employee Active")
        // },
        // setEditData(state, action) {
        //     state.editData = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(createEmployee.fulfilled, (state, action) => {
            state.employee.push(action.payload)
        })
        builder.addCase(getAllEmp.fulfilled, (state, action) => {
            state.employee = action.payload.filter(val => val.role != 'admin');
        })
        builder.addCase(deleteEmp.fulfilled, (state, action) => {
            state.employee = state.employee.filter(emp => emp.id != action.payload);
        })
    }
});

export default employeeSlice.reducer;