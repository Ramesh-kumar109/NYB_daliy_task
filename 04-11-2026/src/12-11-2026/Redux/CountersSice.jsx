
import { createSlice } from "@reduxjs/toolkit";

const CountersSice = createSlice({
    name: "counter",

    initialState: {
        value: 0
    },

    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        reset: (state) => {
            state.value = 0;
        }
    }
});

// Export actions
export const { increment, decrement, reset } = CountersSice.actions;

// Export reducer
export default CountersSice.reducer;
