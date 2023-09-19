import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import cartReducer from '../features/cartSlice';
import priceFilterReducer from '../features/priceFilterSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        priceFilter: priceFilterReducer,
    },
});
