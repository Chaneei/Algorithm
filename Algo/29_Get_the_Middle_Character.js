function getMiddle(s) {
  //Code goes here!
  let get = s.split("");

  if (get.length % 2 != 0) {
    return get.slice(get.length / 2, get.length / 2 + 1).join("");
  } else if (get.length % 2 == 0) {
    return get.slice(get.length / 2 - 1, get.length / 2 + 1).join("");
  }
}
console.log(getMiddle("test"));
console.log(getMiddle("tests"));
console.log(getMiddle("A"));
