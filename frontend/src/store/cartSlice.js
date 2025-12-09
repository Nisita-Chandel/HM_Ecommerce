// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { product, qty }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((i) => i.product._id === product._id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ product, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter((i) => i.product._id !== productId);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
