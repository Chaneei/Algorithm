function find_average(array) {
  // your code here
  if (array.length == 0) return 0;
  let sum = array.reduce((a, b) => a + b);
  return sum / array.length;
}
