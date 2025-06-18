import { createSlice } from "@reduxjs/toolkit";

const students = localStorage.getItem("data");

export interface StudentState {
  value: any | null;
}

const initialState: StudentState = {
  value: students ? JSON.parse(students) : [],
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    update: (state, action) => {
      //   console.log("redux, ", action.payload);
      state.value = action.payload;
    },
  },
});

export const { update } = studentSlice.actions;

export default studentSlice.reducer;
