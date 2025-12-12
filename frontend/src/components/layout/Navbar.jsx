// src/components/layout/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth.js";
import { Search, User, Heart, ShoppingBagIcon } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.qty || 1),
    0
  );
  const wishlistCount = wishlistItems.length;

  const linkBase =
    "pb-1 text-sm md:text-base font-medium tracking-wide border-b-2 border-transparent transition-all duration-200";
  const inactive = "text-gray-400 hover:text-black hover:border-black";
  const active = "text-black border-black";

  return (
    <header className="mt-4 sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-2 py-2 flex items-center gap-8 ml-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
            alt="H&M Logo"
            className="w-25 h-auto mr-2"
          />
        </Link>

        {/* NAVIGATION TABS */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/ladies"
            className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
          >
            Ladies
          </NavLink>

          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/men"
            className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
          >
            Men
          </NavLink>

          <NavLink
            to="/kids"
            className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
          >
            Kids
          </NavLink>

          <NavLink
            to="/beauty"
            className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
          >
            Beauty
          </NavLink>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="ml-190 flex items-center gap-5">
          {/* SEARCH ICON */}
          <Link to="/search">
            <Search size={22} className="text-gray-600 hover:text-black cursor-pointer" />
          </Link>

          {/* WISHLIST ICON WITH COUNT & RED IF NOT EMPTY */}
          <Link to="/wishlist" className="relative">
            <Heart
              size={22}
              className={
                wishlistCount > 0
                  ? "text-red-500 cursor-pointer"
                  : "text-gray-600 hover:text-black cursor-pointer"
              }
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART ICON WITH COUNT BADGE */}
          <Link to="/cart" className="relative">
            <ShoppingBagIcon
              size={22}
              className="text-gray-600 hover:text-black cursor-pointer"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>

          {/* USER ICON OR LOGIN */}
          {user ? (
            <button onClick={logout}>
              <User size={22} className="text-gray-600 hover:text-black cursor-pointer" />
            </button>
          ) : (
            <Link to="/login">
              <User size={22} className="text-gray-600 hover:text-black cursor-pointer" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
