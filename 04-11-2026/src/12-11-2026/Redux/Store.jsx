import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CountersSice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;