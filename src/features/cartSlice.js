import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const { id, title, brand, category, description, discountPercentage, price, rating, thumbnail } = action.payload;
            const existingItem = state.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ id, title, brand, category, description, discountPercentage, price, rating, thumbnail, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                return state.filter(item => item.id !== id);
            }
        },
        clearCart: (state, action) => {
            // const itemIdsToRemove = action.payload;
            return state = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
