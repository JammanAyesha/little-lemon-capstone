// src/components/Footer.js
import React from "react";
import logo from "../assets/logo.png"; // Optional: logo in footer

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <ul className="footer-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <p>Contact us: info@littlelemon.com | +123-456-7890</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
