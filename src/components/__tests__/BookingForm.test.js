// src/components/BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";  // <-- go up one folder


const mockDispatch = jest.fn();

describe("BookingForm Component", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];

  test("renders form heading", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    const heading = screen.getByLabelText(/Choose date/i);
    expect(heading).toBeInTheDocument();
  });

  test("updates date and calls dispatch", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    const dateInput = screen.getByLabelText(/Choose date/i);
    
    fireEvent.change(dateInput, { target: { value: "2025-10-01" } });
    expect(dateInput.value).toBe("2025-10-01");
    expect(mockDispatch).toHaveBeenCalledWith({ type: "updateTimes", date: "2025-10-01" });
  });

  test("selects time from available options", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    expect(timeSelect.value).toBe("18:00");
  });
});
