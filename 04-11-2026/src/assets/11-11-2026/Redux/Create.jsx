import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "././CreateSlice"

const Create = configureStore({
    reducer:counterReducer
});

export default Create;