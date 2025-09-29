// src/components/timesReducer.test.js
import { initializeTimes, timesReducer } from "../Main";

describe("Times Reducer", () => {
  test("initializeTimes returns correct initial times", () => {
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

  test("timesReducer returns same times on updateTimes action", () => {
    const initialState = [];
    const action = { type: "updateTimes", date: "2025-10-01" };
    const newState = timesReducer(initialState, action);
    expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

  test("timesReducer returns current state for unknown action", () => {
    const initialState = ["17:00"];
    const action = { type: "unknown" };
    const newState = timesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
