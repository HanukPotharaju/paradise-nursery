import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount = state.items.reduce((total, item) => total + parseFloat(item.price.substring(1)) * item.quantity, 0);
    },

    removeItem: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
      state.totalAmount = state.items.reduce((total, item) => total + parseFloat(item.price.substring(1)) * item.quantity, 0);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        if (quantity > 0) {
          state.totalQuantity += quantity - item.quantity;
          item.quantity = quantity;
        } else {
          state.totalQuantity -= item.quantity;
          state.items = state.items.filter(item => item.id !== id);
        }
      }
      state.totalAmount = state.items.reduce((total, item) => total + parseFloat(item.price.substring(1)) * item.quantity, 0);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
