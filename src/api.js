// src/api.js
const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    s = (s * a) % m;
    return s / m;
  };
};

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 22; i++) { // 17:00 - 22:30
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }
// If nothing generated, fallback to default times
  if (result.length === 0) {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  return result;
};

export const submitAPI = (formData) => {
  return true;
};
