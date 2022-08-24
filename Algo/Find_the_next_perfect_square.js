function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let num = Math.sqrt(sq);
  console.log(num);

  if (!Number.isInteger(num)) {
    return -1;
  } else {
    return Math.pow(num + 1, 2);
  }
}
