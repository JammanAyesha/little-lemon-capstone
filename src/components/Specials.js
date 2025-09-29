// src/components/Specials.js
import React from "react";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";

const Specials = () => {
  const dishes = [
    { img: dish1, name: "Dish 1", price: "$12" },
    { img: dish2, name: "Dish 2", price: "$15" },
    { img: dish3, name: "Dish 3", price: "$10" },
  ];

  return (
    <section className="Specials">
      <h2>Weekly Specials</h2>
      {dishes.map((dish, index) => (
        <div className="dish-card" key={index}>
          <img src={dish.img} alt={dish.name} />
          <p>{dish.name}</p>
          <p>{dish.price}</p>
        </div>
      ))}
    </section>
  );
};

export default Specials;
