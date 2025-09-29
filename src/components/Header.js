// src/components/Header.js
import React from "react";
import logo from "../assets/logo.png"; // Import your logo here

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <h1>Little Lemon</h1>
    </header>
  );
};

export default Header;

