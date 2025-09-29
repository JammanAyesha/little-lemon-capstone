// src/components/Main.js
import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../api";

export const timesReducer = (state, action) => {
  switch (action.type) {
    case "initializeTimes":
      return action.times;
    case "updateTimes":
      return action.times;
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  // Initialize times for today
  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);
    dispatch({ type: "initializeTimes", times });
  }, []);

  // Function to update times when user selects a date
  const updateTimes = (dateString) => {
    const date = new Date(dateString);
    const times = fetchAPI(date);
    dispatch({ type: "updateTimes", times });
  };

  return (
    <main>
      <section id="hero">
        <h2>Welcome to Little Lemon</h2>
        <p>Fresh meals, great service, and a delightful experience.</p>
      </section>

      <section id="booking">
        <h2>Reserve a Table</h2>
        {/* Make sure you pass updateTimes here */}
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      </section>
    </main>
  );
};

export default Main;
