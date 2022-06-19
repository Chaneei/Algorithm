function getSum(a, b, c = 0) {
  //Good luck!

  if (a <= b) {
    for (i = a; i <= b; i++) {
      c += i;
    }
    return c;
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      c += i;
    }
    return c;
  }
}

console.log(getSum(-1, 5));
