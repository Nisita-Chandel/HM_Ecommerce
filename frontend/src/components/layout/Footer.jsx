// src/components/layout/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", padding: "1rem 0", marginTop: "2rem" }}>
      <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#6b7280" }}>
        © {new Date().getFullYear()} HM. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
