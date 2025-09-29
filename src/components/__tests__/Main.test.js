// src/components/Main.test.js
import { render, screen } from "@testing-library/react";
import Main from "../Main";  // <-- go up one folder


describe("Main Component", () => {
  test("renders hero section", () => {
    render(<Main />);
    const heroHeading = screen.getByText(/Welcome to Little Lemon/i);
    expect(heroHeading).toBeInTheDocument();
  });

  test("renders booking section heading", () => {
    render(<Main />);
    const bookingHeading = screen.getAllByText(/Reserve a Table/i)[1]; // second occurrence is the <h2>
    expect(bookingHeading).toBeInTheDocument();
  });
});
