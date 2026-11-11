import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CreateCounter"

const store=configureStore({
    reducer:{
        counter:counterReducer
    }
});

export default store;