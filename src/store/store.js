// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import wishlistReducer from "./wishlistSlice.js";
import favoritesReducer from "./favoritesSlice.js";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    favorites: favoritesReducer,

  },
});

export default store;
