// src/components/BookingPage.js
import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <section className="BookingPage">
      <h2>Reserve a Table</h2>
      <p>Please fill in the form below to book your table.</p>
      <BookingForm />
    </section>
  );
};

export default BookingPage;
