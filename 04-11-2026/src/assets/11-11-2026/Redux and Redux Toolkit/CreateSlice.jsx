
import { createSlice } from "@reduxjs/toolkit";

const CreatSlice = createSlice({
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
  userSlice.actions;

export default userSlice.reducer;
