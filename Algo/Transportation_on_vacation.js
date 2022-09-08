function rentalCarCost(d) {
  // Your solution here
  let total = 40;
  if (d < 3) {
    return total * d;
  } else if (d >= 3 && d < 7) {
    return total * d - 20;
  } else if (d >= 7) {
    return total * d - 50;
  }
}
