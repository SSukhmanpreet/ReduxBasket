import { createSlice } from '@reduxjs/toolkit';

const priceFilterSlice = createSlice({
  name: 'priceFilter',
  initialState: {
    minPrice: 0,
    maxPrice: 10000,
  },
  reducers: {
    setMinPriceFilter: (state, action) => {
      const { minPrice } = action.payload;
      state.minPrice = minPrice;

    },
    setMaxPriceFilter: (state, action) => {
      const { maxPrice } = action.payload;
      state.maxPrice = maxPrice;
    },
  },
});

export const { setMinPriceFilter, setMaxPriceFilter } = priceFilterSlice.actions;

export default priceFilterSlice.reducer;
