let as = 1234;
function descendingOrder(n) {
  let lastN = n.toString().split("").sort().reverse().join("");
  return Number(lastN);
}

console.log(descendingOrder(as));
