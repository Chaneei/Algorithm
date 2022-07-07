function findShort(s) {
  let result = 0;
  const short = s.split(" ").sort((a, b) => a.length - b.length);
  return short[0].length;
}
