// src/components/Main.js
import React from "react";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";

const Main = () => {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <h2>Welcome to Little Lemon</h2>
        <p>Fresh meals, great service, and a delightful experience.</p>
        <button>Reserve a Table</button>
      </section>

      {/* Highlights Section */}
      <section id="highlights">
        <h2>Weekly Specials</h2>
        <div className="dish-card">
          <img src={dish1} alt="Dish 1" />
          <p>Dish 1 description</p>
          <p>$12</p>
        </div>
        <div className="dish-card">
          <img src={dish2} alt="Dish 2" />
          <p>Dish 2 description</p>
          <p>$15</p>
        </div>
        <div className="dish-card">
          <img src={dish3} alt="Dish 3" />
          <p>Dish 3 description</p>
          <p>$10</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">"Amazing food!" - Customer A</div>
        <div className="testimonial">"Excellent service!" - Customer B</div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Little Lemon</h2>
        <p>Placeholder for restaurant description.</p>
        <div className="about-images">
          <img src={dish1} alt="About Image 1" />
          <img src={dish2} alt="About Image 2" />
        </div>
      </section>
    </main>
  );
};

export default Main;
