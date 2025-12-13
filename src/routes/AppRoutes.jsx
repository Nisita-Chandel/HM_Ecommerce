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
import FavoritePage from "../pages/FavoritePage.jsx";
import LadiesPage from "../pages/LadiesPage.jsx";
import MenPage from "../pages/MenPage.jsx";
import KidsPage from "../pages/KidsPage.jsx";
import BeautyPage from "../pages/BeautyPage.jsx";
import KidsProductDetails from "../pages/KidsProductDetails.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import HomeLayout from "../components/layout/HomeLayout.jsx";

const AppRoutes = () => {
  return (
    <Routes>

      {/* 🔴 ALL PAGES UNDER HOME LAYOUT */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/ladies" element={<LadiesPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/kids/:id" element={<KidsProductDetails />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Route>

      {/* 🔴 AUTH PAGES (NO NAVBAR/FOOTER IF YOU WANT) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

    </Routes>
  );
};

export default AppRoutes;
