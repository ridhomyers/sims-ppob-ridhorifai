import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ridho Rifai",
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    changeName: () => {},
  },
});

export const { changeName } = slice.actions;
export default slice.reducer;
