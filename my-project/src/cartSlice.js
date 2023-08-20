import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.push(newItem);
    },
    updateCartItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.find(item => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
