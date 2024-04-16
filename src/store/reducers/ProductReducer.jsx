import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
        },
        deleteProducts: (state, action) => {
            state.products.splice(action.payload, 1);
        },
    },
});

export const { getProducts, deleteProducts } = productsSlice.actions;
export default productsSlice.reducer;
