function oddOrEven(array) {
  //enter code here
  const result = Math.abs(array.reduce((a, b) => a + b, 0));
  if (result == 0) {
    return "even";
  } else if (result % 2 == 1) {
    return "odd";
  } else if (result % 2 == 0) {
    return "even";
  }
}
