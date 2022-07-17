function findUniq(array) {
  // do magic
  return array.find((item) => array.indexOf(item) === array.lastIndexOf(item));
}
