// src/App.jsx
import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Footer from "./components/layout/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
