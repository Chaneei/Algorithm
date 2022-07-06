function longest(s1, s2) {
  let result = [...s1, ...s2];
  result.sort();
  let long = [];
  result.forEach((ele) => {
    if (!long.includes(ele)) {
      long.push(ele);
    }
  });
  return long.join("");
}
