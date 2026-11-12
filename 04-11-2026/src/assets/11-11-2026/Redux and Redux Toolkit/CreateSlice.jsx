
import { createSlice } from "@reduxjs/toolkit";

const CreateSlice = createSlice({
  name: "user",

  initialState: {
    name: "John",
  },

  reducers: {
    changeName: (state) => {
      state.name = "Kumar";
    },

    resetName: (state) => {
      state.name = "John";
    },

    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName, resetName, updateName } =
  CreateSlice.actions;

export default CreateSlice.reducer;
