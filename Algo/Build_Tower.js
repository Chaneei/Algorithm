function towerBuilder(nFloors) {
  // build here
  let res = [];
  for (let i = 1; i <= nFloors; i++) {
    let str = "*".repeat(2 * i - 1);
    let space = " ".repeat((2 * nFloors - 2 * i) / 2);
    res.push(space + str + space);
  }
  return res;
}
