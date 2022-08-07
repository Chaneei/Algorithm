function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let c = classPoints.reduce((a, b) => a + b);
  let avg = c / classPoints.length;
  if (avg <= yourPoints) {
    return true;
  } else {
    return false;
  }
}
