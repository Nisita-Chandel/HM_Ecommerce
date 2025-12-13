


// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import api from "../services/api.js";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("hm_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      setUser(data);
      localStorage.setItem("hm_user", JSON.stringify(data));
      localStorage.setItem("hm_token", data.token);
      alert("Logged in!");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hm_user");
    localStorage.removeItem("hm_token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
