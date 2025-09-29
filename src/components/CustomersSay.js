// src/components/CustomersSay.js
import React from "react";

const CustomersSay = () => {
  const testimonials = [
    '"Amazing food!" - Customer A',
    '"Excellent service!" - Customer B',
  ];

  return (
    <section className="CustomersSay">
      <h2>What Our Customers Say</h2>
      {testimonials.map((t, i) => (
        <div className="testimonial" key={i}>{t}</div>
      ))}
    </section>
  );
};

export default CustomersSay;
