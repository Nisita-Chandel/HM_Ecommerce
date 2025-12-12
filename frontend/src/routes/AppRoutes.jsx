// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import FavouritePage from "../pages/FavouritePage.jsx";
import LadiesPage from "../pages/LadiesPage.jsx";
import MenPage from "../pages/MenPage.jsx";
import KidsPage from "../pages/KidsPage.jsx";
import BeautyPage from "../pages/BeautyPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      {/* 👇 CHANGE THIS LINE */}
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      {/*       ^^^^^^^ must match navigate(`/product/${product.id}`) */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favourite" element={<FavouritePage />} />
      <Route path="/ladies" element={<LadiesPage />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/Beauty" element={<BeautyPage/>}/>


    </Routes>
  );
};

export default AppRoutes;
