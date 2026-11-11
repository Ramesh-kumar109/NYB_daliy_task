
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./CreateSlice";

const CreateStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default CreateStore;
