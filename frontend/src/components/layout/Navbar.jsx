// src/components/layout/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth.js";

const Navbar = () => {
  const { user, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="navbar" style={{ borderBottom: "1px solid #e5e7eb", marginBottom: "1rem" }}>
      <nav
        className="navbar-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" className="logo" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          HM
        </Link>

        <div className="nav-links" style={{ display: "flex", gap: "1rem" }}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart ({cartCount})</NavLink>
        </div>

        <div className="nav-auth" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {user ? (
            <>
              <span style={{ fontSize: "0.9rem" }}>Hi, {user.name || user.email}</span>
              <button
                onClick={logout}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #e5e7eb",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink
                to="/signup"
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "#111827",
                  color: "white",
                }}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
