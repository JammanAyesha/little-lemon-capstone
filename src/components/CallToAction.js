// src/components/CallToAction.js
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="CallToAction">
      <h2>Welcome to Little Lemon</h2>
      <p>Fresh meals, great service, and a delightful experience.</p>
      <Link to="/booking">
        <button>Reserve a Table</button>
      </Link>
    </section>
  );
};

export default CallToAction;
