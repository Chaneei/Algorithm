function solution(my_string, n) {
  let arr = my_string.split("");
  return arr.map((item) => item.repeat(n)).join("");
}
