function sumTwoSmallestNumbers(numbers) {
  //Code here
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}

console.log(sumTwoSmallestNumbers([5, 6, 12, 19, 22]));
