function gimme(triplet) {
  let test = [...triplet];
  let a = test.sort((a, b) => b - a)[1];
  return triplet.indexOf(a);
}
