// src/components/Chicago.js
import React from "react";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";

const Chicago = () => {
  return (
    <section className="Chicago">
      <h2>About Little Lemon Chicago</h2>
      <p>Our story in Chicago, bringing fresh meals to our community.</p>
      <div className="about-images">
        <img src={dish1} alt="About 1" />
        <img src={dish2} alt="About 2" />
      </div>
    </section>
  );
};

export default Chicago;
