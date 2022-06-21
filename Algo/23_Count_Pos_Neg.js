function countPositivesSumNegatives(input) {
  if (input == null || input.length < 1) {
    return [];
  }
  var sum = 0;
  var pos = [];

  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      pos.push(input[i]);
    } else {
      sum += input[i];
    }
  }
  return [pos.length, sum];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
