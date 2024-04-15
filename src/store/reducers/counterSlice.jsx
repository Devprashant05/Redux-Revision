import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        },
        incrementAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementAmount } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementAmount(amount));
    }, 1000);
};

export default counterSlice.reducer;
