function solution(my_string) {
  const testarr = my_string.split("");
  let str = "aeiou";

  return testarr.filter((x) => !str.includes(x)).join("");
}
