function bmi(weight, height) {
  let bw = weight;
  let bh = Math.pow(height, 2);
  let result = bw / bh;
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25.0) {
    return "Normal";
  } else if (result <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
