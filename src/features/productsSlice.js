import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define an async thunk action to fetch products from a link
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    console.log("FETCHING DATA");
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("data", data);
    // console.log(data.products.sort((a, b) => a.price > b.price));
    return data.products;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: [
        // { id: 1, name: 'toothbrush', price: 10 },
        // { id: 2, name: 'toothpaste', price: 20 },
        // { id: 3, name: 'car', price: 5 },
        // { id: 4, name: 'bike', price: 15 },
        // { id: 5, name: 'phone', price: 25 },
        // { id: 6, name: 'island', price: 100 },
    ],
    reducers: {
        setProducts: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSearchQuery } = productsSlice.actions;

export default productsSlice.reducer;
